import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'AIMP.settings')
django.setup()

from Users.models import User  # Importing custom User model

def create_user(username, password, email, role):
    if role not in ['student', 'professor']:
        print('Invalid role specified')
        return

    if User.objects.filter(username=username).exists():
        print('User already exists')
        return

    user = User.objects.create_user(username=username, password=password, email=email, role=role)
    print(f'User "{username}" created successfully')

if __name__ == '__main__':
    import sys
    if len(sys.argv) != 5:
        print('Usage: python create_user.py <username> <password> <email> <role>')
    else:
        _, username, password, email, role = sys.argv
        create_user(username, password, email, role)
