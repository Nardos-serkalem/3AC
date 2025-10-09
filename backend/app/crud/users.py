from sqlalchemy.orm import Session
from passlib.context import CryptContext
from app.models.user import User

pwd_context = CryptContext(schemes=["argon2"], deprecated="auto")


def get_user_by_email(db: Session, email: str):
    return db.query(User).filter(User.email == email).first()


def create_user(db: Session, name: str, email: str, password: str):
    # keep behavior compatible with any previous truncation (if used)
    # but prefer to accept full passwords; here we avoid truncation since
    # argon2/other modern hashers don't require it. If you use bcrypt,
    # consider truncating or switching to bcrypt_sha256/argon2.
    hashed = pwd_context.hash(password)
    db_user = User(name=name, email=email, hashed_password=hashed)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a plaintext password against the stored hash."""
    return pwd_context.verify(plain_password, hashed_password)
