from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


class AccountManager(BaseUserManager):
    def create_user(self, email, given_name, name, password=None):
        if not email:
            raise ValueError('User must have a valid email.')

        user = self.model(
            email=self.normalize_email(email),
            given_name=given_name,
            name=name
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, given_name, name, password):
        user = self.create_user(
            email=email,
            given_name=given_name,
            name=name,
            password=password
        )

        user.is_staff = True
        user.is_superuser = True
        user.is_admin = True
        user.save(using=self._db)
        return user


class Account(AbstractBaseUser):

    email = models.EmailField(verbose_name='email', max_length=60, unique=True)
    given_name = models.CharField(max_length=30)
    name = models.CharField(max_length=30)
    date_joined = models.DateTimeField(verbose_name='date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['given_name', 'name']

    def __str__(self):
        return f'{self.given_name}, {self.name}, {self.is_admin}'

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):  # can set custom permissions for users to access different things
        return True
