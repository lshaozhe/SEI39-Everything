[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Django Models and Migrations

## Learning Objectives

* Create a new Django application with Postgres as the default database
* Use `manage.py` commands to create, edit, update and seed a database
* Write models using Django and use them to modify the database tables.
* Look at Django's ORM.

## Django

Django is a free and high level Python web framework that lets you map requests to the url; create html dynamically, It follows a model-view-template architectural pattern. It is used for rapid developement; creating scalable apps and helps in securing yout apps.

## Framing

In this lesson, we will be focusing on the many features that Django provide us
to set up and maintain our database and models.

## We Do: Set Up a Django Application

Let's start by making a directory for our project:

```bash
mkdir django-starter
cd django-starter
```

Let's install some dependencies and save them. Django doesn't utilize a
`Gemfile` or a `package.json`. Instead, we just use a text file (`Pipfile`) that lists all
of our dependencies.

```bash
pipenv install Django
pipenv install psycopg2
```

> You may need to also install `pipenv install psycopg2-binary`

`pipenv` also automatically creates a virtual environment. Virtual environments allow us to have virtual installation of python and
multiple versions of Python on the same system so we can have different versions
of both Python and the packages we are using on our computers. To activate our virtual environment we need to run `pipenv shell` in the same directory as our `Pipfile`

Django is, of course, the framework we are using. `psycopg2` allows us to use
PostgreSQL within Django.

If you are downloading and running a Python project, you can usually install
its dependencies with `pipenv install`.

Let's go ahead and create our project. `django-admin` gives us commands to
generate some of our project for us.

```bash
django-admin startproject tunr_django . # Do not forget the 'dot' at the end.
```

Take a minute to look at the generated files.

Let's go ahead and also create our app.

```bash
django-admin startapp tunr
```

Again, take a minute to look at the newly generated files.

By default, Django uses SQLite for its database.  Let's use PostgreSQL instead
since it's better suited for production applications.

Create a database:

```bash
createdb tunr
```

Then, in `tunr_django/settings.py` find the `DATABASE` constant dictionary.
Let's edit it to look like this:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "tunr",
    }
}
```

We must also include the app we generated. On the bottom line of the
`INSTALLED_APPS` list, add `tunr`. Whenever you create a new app, you have to
include it in the project.

```python
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "tunr",
]
```

Now, in the terminal run `python3 manage.py runserver` and then navigate to
`localhost:8000`. You should see a page welcoming you to Django!

`manage.py` contains a lot of management commands for Django. We'll see more
later, but [here](https://docs.djangoproject.com/en/1.11/ref/django-admin/) is
the full documentation if you are interested in what's going on behind the
scenes.

## Models

Let's start working with some data. In Django, we will write out models.
Models represent the data layer of our application. We store that data in our
database:

[rMVC Diagram](http://i.stack.imgur.com/Sf2OQ.png)

First, lets create a Python class that inherits from the Django built in
`models.Model` class. Let's also define the fields within it. We do so like
this:

```python
# tunr/models.py
class Artist(models.Model):
    name = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)
    photo_url = models.TextField()
```

Here, we are defining three fields (which will be represented as columns in our
database): `name`, `photo_url` and `nationality`. `name` and `nationality` are
character fields which means that we must add an upper limit to how many
characters are in that database field. The `photo_url` will have unlimited
length. The full listing of the available fields are
[here](https://docs.djangoproject.com/en/1.11/ref/models/fields/).

Let's also add the magic method `__str__`. This method defines what an instance
of the model will show up as by default. It will be really helpful for debugging
in the future!

```python
class Artist(models.Model):
    name = models.CharField(max_length=100)
    nationality = models.CharField(max_length=100)
    photo_url = models.TextField()

    def __str__(self):
        return self.name
```

## Migrations

In the SQL class, we talked about how schema is enforced on the database side when we use SQL databases. But here we are writing our schema on the Python side! We have to translate that code into the schema for our database. We will do so using migrations. In some frameworks, you have to write your migrations yourself, but in Django the framework writes them for us!

In order to migrate this model to the database, we will run two commands. The first is:

```bash
python3 manage.py makemigrations
```

This will generate a migration file that gets all of its data from the code in
the `models.py` file. You normally don't edit these files manually in Django.

Let's also run:

```bash
python3 manage.py migrate
```

This will commit the migration to the database.

### Foreign Keys

Let's also start filling out the Song model. We will define the class and then
add a foreign key. We do so like this:

```python
class Song(models.Model):
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name="songs")
```

The `related_name` refers to how the model will be referred to in relation to
its parent -- you will see this in use later on. `on_delete` specifies how we
want the models to act when their parent is deleted. By using cascade, related
children will be deleted.

### Admin Console

Before we get too far, let's also create a superuser for our app. Django has
authentication (and authorization) right out of the box, so you don't have to
write it yourself or add a plugin.

In the terminal, run:

```bash
python3 manage.py createsuperuser
```

Then fill in the information in the boxes that pop up!

So far in this class, we have used seed files to add initial data to our
databases. We can also do that in Django ([see this
article](https://docs.djangoproject.com/en/1.11/howto/initial-data/)), but let's
try something a little bit different instead.

Django has an admin dashboard built in, which gives us full CRUD functionality
straight out of the box.

Let's set it up! In `tunr/admin.py`, add the following code:

```python
from django.contrib import admin
from .models import Artist

admin.site.register(Artist)
```

If you now navigate to `localhost:8000/admin` after running `python3 manage.py runserver`, you get a full admin view where
you have full CRUD functionality for your model! Create two Artists here.

>Note that delete operation may not work till you register Song in the `tunr/admin.py` as a relationship exists between the Artist and Song model.

### You Do: Add the Song model

Add `title`, `album` and `preview_url` fields, then create and run the
migrations. Finally create three songs using the admin site after registering Song on `tunr/admin.py`.

> If you see an error like- 'You are trying to add a non-nullable field' after running `python3 manage.py migrations`, ypu can either add `default=''` in `tunr.models` OR remove all files from `tunr/migrations` folder except for `__init.py` and rerun `python3 manage.py migrations` & `python3 manage.py migrate` OR try dropping the entire DB and recreating it, `dropdb tunr` & then `createdb tunr`

## Django's ORM

Django has an ORM, similar to Mongoose in Express. Let's look at a few queries.

If you want to access a REPL, run `$ python3 manage.py shell`.

```python
# Import the models before executing command
from tunr.models import Artist
from tunr.models import Song

# Select all of the artist objects in the database
Artist.objects.all()

# Get the artist with the id of 1 (can also do pk here which stands for primary key)
Artist.objects.get(id=1)

# Get the artist with the name "Sigur Ros", if there are two Sigur Ros's this will error!
Artist.objects.get(name="Sigur Ros")

# Get all the Artists who are from Iceland
Artist.objects.filter(nationality="Iceland")

# Create an Artist with the following attributes, then save, commiting it to the database
sigur_ros = Artist(name="Sigr Ros", photo_url="test.com", nationality="Iceland")
sigur_ros.save()

# Oops, we misspelled Sigur Ros's name! Let's change it and then commit to the DB
sigur_ros.name = "Sigur Ros"
sigur_ros.save()

# Let's add a song to the artist
song = Song(title="Hoppipolla", album="Takk", preview_url="test.com", artist=sigur_ros)
song.save()

# Delete the song
song.delete()

# Delete song that has a specific id
Song.objects.get(id=1).delete()
```

These are some simple ones, but if you like Django, know that you can do some
really cool things with it's ORM. For example:

```python
# This will return all Artists who's name starts with an S
Artist.objects.filter(name__startswith="S")

# This will return all the songs with the id's 1 and 2, excluding all those equal to or greater than 3
Song.objects.exclude(artist_id__gte=3)
```

To deactivate from the virtual environment run `deactivate` or do `ctrl-d`.

## Bonus: Django Extensions

Django Extensions adds additional debugging functionality to Django. We would **highly** recommend using it to make coding easier! [Link](https://github.com/django-extensions/django-extensions).

To set it up:

```bash
pipenv install django-extensions
```

Add `django_extensions` to your `INSTALLED_APPS` list:

```py
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "tunr",
    "django_extensions",
]
```

You can now run `python manage.py shell_plus --ipython` to get to an IPython shell.

## Closing/Questions

## Exercises

Complete the Models + Migrations portion of
[Scribble](https://git.generalassemb.ly/sf-wdi-46/scribble-models--migrations).

## Additional Resources

* [Django Docs: Models](https://docs.djangoproject.com/en/2.0/topics/db/models/)
* [Django Docs: Models & Databases](https://docs.djangoproject.com/en/2.0/topics/db/)
* [How to Create Django Models](https://www.digitalocean.com/community/tutorials/how-to-create-django-models)
* [Django Docs: Migrations](https://docs.djangoproject.com/en/2.0/topics/migrations/)
* [Django Docs: Writing Database Migrations](https://docs.djangoproject.com/en/2.0/howto/writing-migrations/)
* [Django Docs: Providing initial data for models](https://docs.djangoproject.com/en/1.11/howto/initial-data/)
* [Django Extensions](https://github.com/django-extensions/django-extensions)
