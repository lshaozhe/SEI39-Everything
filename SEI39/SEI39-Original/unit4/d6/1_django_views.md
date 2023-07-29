[![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)](https://generalassemb.ly)

# Django Views

## Learning Objectives

* Use Django to create views
* Use routing in Django
* Create templates using Django
* Complete CRUD actions in Django


## View Functions

Using the models from this morning, let's create some views to display our application's data! Views are really similar to controllers in the other languages we have looked at so far. They pass data to our templates.

In your view file, you may see that `render` is already imported. This function is super helpful, and it does exactly what it sounds like - it renders views!

`views.py`

```python
from django.shortcuts import render

from .models import Artist, Song


def artist_list(request):
    artists = Artist.objects.all()
    return render(request, "tunr/artist_list.html", {"artists": artists})
```

Let's break this function down a bit. Let's first look at the declaration of a function. It looks like any other Python function! The only parameter to it is the request, which is what it sounds like. This is the HTTP Request dictionary. Then we are selecting all of the artists from the database into a QuerySet called artists.

On the third line, we see that we are rendering a template. The first argument is the request argument, the second is the template that we want to render, and the third is a dictionary with the data we want to send to the view. In this case, that's the artist QuerySet with the key 'artists'.

### You Do: Song List Function

Write the view and the url to list all of the songs in the application.

## URLs

Let's go ahead at how we will access these views -- through the URLs!

In Django, the URL's deviate from the ones we've seen in other frameworks. They use stricter parameters where we have to specify the types of parameters. This eliminates a ton of the issues we've seen where we've had to reorder urls, but it makes them a bit more complicated.

Let's look at the existing `urls.py` in the `tunr_django` directory. In there, let's add a couple things.

```python
from django.conf.urls import include
from django.urls import path
from django.contrib import admin

urlpatterns = [
    path("admin", admin.site.urls),
    path("", include("tunr.urls")),
]
```

We are adding an import - `include` so that we can include other url files in our main one. We are doing this in order to make our app more modular -- again these "mini apps" in Django are supposed to plug into another parent app if needed.

Let's write our urls for our app in another file called `tunr/urls.py`. Go ahead create file `urls.py` under `tunr` folder.

tunr/urls.py

```python
from django.urls import path
from . import views

urlpatterns = [
    path("", views.artist_list, name="artist_list"),
]
```

This is going to be the root URL. This is similar to the "/" URL in other languages -- it's a url that starts, ends, and has nothing in between. This way of doing URLs is great because they are super explicit. We no longer have to reorder or rename URLs in order to make them work!

This URL's second argument is the view function this route is going to match up with. This will go in the view file. Thirdly, we are going to used a named parameter. This is going to be used in our templates in order to link from one page to another.

### You Do: Add a URL for the 'song_list' (2 mins)

>Make sure the api route is unique.

Now that we have two URLs, let's finish up by writing the templates to render our views!

### Templates and Django Templating Language

In previous frameworks, we saw template strings being used; Django also has its own! It looks a lot like template strings with javascript in that it uses a bunch of curly braces. In order to duplicate what we have on the version of Tunely, let's add the following code, under:

`tunr/templates/tunr/artist_list.html`

```html
<h2>Artists <a href="">(+)</a></h2>
<ul>
    {% for artist in artists %}
        <li>
            <a href="">{{ artist.name }}</a>
        </li>
    {% endfor %}
</ul>
```

Right now, we will keep our `href`'s blank until we have more routes. The Django template here loops through our QuerySet of artists, rendering the name of each. The distinction between `{{}}` and `{%%}` usually is the difference between rendering or just running code (i.e. if's or for's). The one exception is with url's - which we will see later on today.

### You Do: Create List View for Songs

### We Do: Artist Show

Let's look at another route in `tunr/views.py` -- let's do show this time.

```python
def artist_detail(request, pk):
    artist = Artist.objects.get(id=pk)
    return render(request, "tunr/artist_detail.html", {"artist": artist})
```

This function is really similar to the list view, this time we just are selecting one artist instead of all of them.  We receive a second parameter to the function -- the primary key of the artist we want to display. Let's look at where that is coming from and hook up the URL to the view in `tunr/urls.py`.

```python
path('artists/<int:pk>', views.artist_detail, name='artist_detail'),
```

In Django we use `pk` as an alternate term for `id`. In the database, primary keys are the unique ids for each row, and Django adopts that terminology by convention.

Finally, let's write our template under.

`tunr/templates/tunr/artist_detail.html`

```html
<h2>{{ artist.name }} <a href="">(edit)</a></h2>
<h4>{{ artist.nationality }}</h4>

<img src="{{ artist.photo_url }}" alt="" class="artist-photo">

<h3>Songs <a href="">(+)</a></h3>
<ul>
    {% for song in artist.songs.all %}
        <li>
            <a href="">{{ song.title }}-{{ song.album }}</a>
        </li>
    {% endfor %}
</ul>
```

Here, we are showing some attributes of the artist object, then we are looping through the songs attached to that artist.

Let's take a step back to our `artist_list.html`.
Before, we omitted the links to to the next page, but let's look at linking to our show page now. On line 5, let's insert a url.

In the `href` attribute, let's add a URL tag. It looks like this:

```html
<a href="{% url 'artist_detail' pk=artist.pk %}"> {{ artist.name }} </a>
```

First, we are going to use the name of the URL that we declared back in the `tunr/urls.py` file. Then we need to pass the primary key of that artist into that url. We do so like the above.

### You Do Song Show

Create the show page for the song. Also, link to this view in the `artist_detail` template.

## We Do: base.html and CSS

Right now we have two views, but they are really ugly. Let's do something about that! Let's first add a `base.html` file in the `tunr` views. It's at first going to look exactly like any other HTML base template we normally have, with one exception. We will have a block where we want our template to go. We will name this block content. We could have multiple blocks if we wanted. In that case they would be named other things -- say "title" or "header" instead of "content".

`tunr/templates/tunr/base.html`

```html
<html>
    <head>
        <title>Tunr</title>
    </head>
    <body>
        <h1>Tun.r</h1>
        <nav>
            <a href="/songs">Songs</a>
            <a href="/">Artists</a>
        </nav>
        {% block content %}
        {% endblock %}
    </body>
</html>
```

Now let's hook this up to all our templates -- which ends up looking like this:

```html
{% extends 'tunr/base.html' %}

{% block content %}
    <h2>Artists <a href="{% url 'artist_create' %}">(+)</a></h2>
    <ul>
        {% for artist in artists %}
            <li>
                <a href="{% url 'artist_detail' pk=artist.id %}">{{ artist.name }}</a>
            </li>
        {% endfor %}
    </ul>
{% endblock %}
```

Each template is going to be extending the base, and our current content will go with in the `content` block of code.

Now let's add styling. By default, Django is going to host our static files in the `static` folder. Let's add `static` folder under `tunr` app and a `css` subdirectory, and a `tunr.css` file within it.

Let's copy the css file in `tunr/static/css/tunr.css`:

```css
body {
  font-family: "Helvetica Neue", sans-serif;
  max-width: 50em;
  margin: auto;
  padding: 2em 1em;
}

nav a {
  border: 1px solid black;
  margin: 0.5em;
  padding: 0.5em;
  background-color: #eeeeee;
}

nav a:hover {
  background-color: orange;
  color: blue;
}

a,
a:visited {
  text-decoration: none;
  color: blue;
}

a:hover {
  background-color: #ccc;
}

ul {
  list-style-type: none;
}

li {
  margin: 0.25em;
}

h1 {
  font: inherit;
  color: inherit;
  letter-spacing: -0.05em;
  text-decoration: none;
  border-bottom: 1px solid black;
}

h2 > a {
  font-size: 0.75em;
}

input {
  display: block;
  margin: 5px 0 20px 0;
  padding: 9px;
  border: solid 1px black;
  width: 300px;
  background: whitesmoke;
}

input[type="submit"],
a.delete {
  width: auto;
  padding: 9px 15px;
  background-color: gray;
  border: 0;
  font-size: 14px;
  color: #ffffff;
}

a.delete {
  background-color: red;
}

.artist-photo {
  width: 400px;
}

span.nationality {
  font-size: 0.5em;
}

.user-info {
  float: right;
}

a.fav {
  text-decoration: none;
  color: red;
}

a.no-fav {
  text-decoration: none;
  color: black;
}

.fav:visited,
.no-fav:visited {
  text-decoration: none;
}
```

Finally, let's add this into our `base.html`.

```html
{% load staticfiles %}
<html>
    <head>
        <title>Tunr</title>
        <link rel="stylesheet" href="{% static 'css/tunr.css' %}">
    </head>
    <body>
        <h1>Tun.r</h1>
        <nav>
            <a href="/songs">Songs</a>
            <a href="/">Artists</a>
        </nav>
        {% block content %}
        {% endblock %}
    </body>
</html>
```

On line 1, we are telling Django to load the static files onto the current page. Then in the `link` tag, we can refer to our static file like the above. This may seem a bit messy, but it really helps when you deploy your app, especially if you want to host your static files on a separate server.

Run server `python3 manage.py runserver` and test the paths created till now. If no data is rendered, insert some data using Admin option.

### We Do: Artist Create

So far we've just shown our artists. Let's now create a new one! First, let's make a file called `forms.py` under `tunr` app. This is going to be where we make our forms using Python code!

We do so like this:
`tunr/forms.py`

```python
from django import forms
from .models import Artist, Song


class ArtistForm(forms.ModelForm):
    class Meta:
        model = Artist
        fields = (
            "name",
            "photo_url",
            "nationality",
        )
```

First, we will create a class to house our form. Inside of it we will declare another class. The Meta class within the form contains meta data we have to describe the form. In this case, the model attached to the form and the fields we want to include in our form. Note that the fields are in parenthesis instead of square brackets - they are in a tuple instead of a list! Tuples are like lists but they are immutable -- they can't be changed.

The rationale for the `Meta` class within the class is that it contains information describing the class that isn't specific to a particular instance, rather it just contains configuration details (bonus: [you can do this for models as well](https://docs.djangoproject.com/en/1.11/ref/models/options/)). For clarification (and maybe interview) purposes, this is different than a Python `metaclass`. They deal with meta-programming in Python!

Now, in our `views.py` file, let's make a view function.

```python
def artist_create(request):
    if request.method == "POST":
        form = ArtistForm(request.POST)
        if form.is_valid():
            artist = form.save()
            return redirect("artist_detail", pk=artist.pk)
    else:
        form = ArtistForm()
    return render(request, "tunr/artist_form.html", {"form": form})
```

We must also change the first line of our file to `from django.shortcuts import render, redirect` so that we have redirects available to us. Secondly we will need to make our `ArtistForm` available from the forms.py file by including this line as well: `from .forms import ArtistForm`

Let's break down this function: instead of having different functions that handle different types of requests, we can handle multiple types within the same function in Django. So, in the first line we check to see if our request is a post request. If it is, we will fill in our form with data from the post request, check if the form is valid, if it is, then we will save the new artist and redirect to it's detail view. If it errors, then we will render the artist form with those errors.

If instead the request method is 'get', we just create an instance of the form without any pre-filled data, and then we will render the form template.

Now let's make the template. Since we already declared the fields we want in our form in the `forms.py file, we can just do this:

```html
{% extends 'tunr/base.html' %}

{% block content %}
    <h1>New Artist</h1>
    <form method="POST" class="artist-form">
        {% csrf_token %}
        {{ form.as_p }}
        <button type="submit" class="save btn btn-default">Save</button>
    </form>
{% endblock %}
```

We declare our form tags in html, we need to have our `csrf_token`, and then we can just insert our form like `{{ form.as_p }}`. The `.as_p` just formats the form nicely, you could also just do `{{ form }}` but it would be ugly.

We also need a submit button and then we are good! Errors are handled for us in-line!

Finally, just add a url!

```python
path("artists/new", views.artist_create, name="artist_create")
```

### You Do: Song Create

Your turn! Do the same as above but for the song creation form.

### We Do: Artist Edit

Django makes forms really modular, all we have to do is add a new view function and a url to make our form edit instead of create!

```python
def artist_edit(request, pk):
    artist = Artist.objects.get(pk=pk)
    if request.method == "POST":
        form = ArtistForm(request.POST, instance=artist)
        if form.is_valid():
            artist = form.save()
            return redirect("artist_detail", pk=artist.pk)
    else:
        form = ArtistForm(instance=artist)
    return render(request, "tunr/artist_form.html", {"form": form})
```

Here, the only additionally thing we are doing is adding the instance of the artist as a named parameter to our ArtistForm class. Voilà! We have an edit form now! We are rendering the same template and everything!

Let's also add a new url:

```python
path("artists/<int:pk>/edit", views.artist_edit, name="artist_edit")
```

### You Do: Song Edit

Do the same thing for the song edit form!

### We Do: Artist Delete

Delete functions are really simple as well.

```python
def artist_delete(request, pk):
    Artist.objects.get(id=pk).delete()
    return redirect("artist_list")
```

We just need to find an artist, delete it, and then redirect to the index page.

Let's add its url:

```python
    path('artists/<int:pk>/delete', views.artist_delete, name='artist_delete'),
```

### You Do: Song Delete

Do the same thing for Songs!

## Bonus: Jinja

Jinja is an awesome templating language for Django. It takes the place of Django Templates and adds some additional functionality. [Here](https://docs.djangoproject.com/en/2.0/topics/templates/#django.template.backends.jinja2.Jinja2) are the instructions for getting started with it.

## Bonus: RegEx

You can also use RegEx's for creating URLs in Django -- it can be really helpful for customizing your URLs.

We won't go over them in detail here, but [here](http://www.aivosto.com/vbtips/regex.html) is a link about them in more detail, and [here](https://www.google.com/search?q=regex+sanbox&oq=regex+sanbox&aqs=chrome..69i57j0l5.2240j0j7&sourceid=chrome&ie=UTF-8) is a sandbox to test them out.

A quick primer on what will be helpful for creating urls:

* `^` - beginning of the text
* `$` - end of  text
* `\d` - digit
* `+` - required
* `()` - captures part of a pattern

---

_Copyright 2022, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)_
