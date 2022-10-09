# MoneyTracker
OSU Hackathon Fall 2023 - Fantastic4

### Setting up the backend
How to Run Django

  A. Create Superuser for yourself
    1. cd into backend "cd backend"
    1. python manage.py createsuperuser
    2. Enter ID, Email, Password (Not shown in the terminal)

  B. Run Django

    1. python manage.py runserver
    2. Open up http://127.0.0.1:8000/ (default url) on your browser
    3. http://127.0.0.1:8000/admin to access admin server
    4. Enter your superuser ID and PW

Make migrations (whenever you update models.py)

    1. python manage.py makemigrations
    2. python manage.py migrate

### Setting up the frontend
  A. Start the react app
    1. cd into frontend "cd frontend"
    2. run npm start
