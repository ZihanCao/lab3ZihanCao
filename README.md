# Setup Instructions

The steps we need for deploying the webapp on heroku, testing locally with localhost, and the files you will use within the python virtual environment. Remember - we need to _package_ the content to deploy the app.. you probably definitely might want to read this regarding [python virtual environments](https://medium.com/co-learning-lounge/create-virtual-environment-python-windows-2021-d947c3a3ca78) (anaconda/conda virtual environment setup is also explained in the article as is a general setup for a virtual environment - like we did for lab)

## Steps

1. clone/grab the sample_site folder
2. make sure the folder inside sample_site is `templates/` with an `s` (just in case something changed)
3. create the python `virtual environment` using `venv`
4. activate the `virtual environment`
5. now we can install the python environment libraries with `pip`
6. at this point you already have the files from lab (double check):
   - count.txt
   - requirements.txt
   - app.py
   - Procfile
   - templates/index.html
7. connect to, and deploy with, `Heroku`

---

## Commands to run

1. python3 -m venv venv
   - this assumes that the `python` version you are using (and saved as) is `python3`
   - `venv` is the command to make the virtual environment
   - we name our venv `venv`
   - think of `-m` as to make the `venv` (but really it is for `module`)

2. source venv/bin/activate
   - this is for `Unix/Linux/Mac`

3. source .\venv\Scripts\activate
   - this is for `Windows`

4. your terminal should look like this (`Windows`):

``` Terminal
(venv) Path\to\sample_site\
```

5. pip install flask gunicorn
   - `flask` is a `Python` package to make an interactive app 
   - `gunicorn` is the `Python` web server interface we are using
   - maybe you use `pip3`
   - maybe you need to setup `VS Code` a bit more first (this will be in the video)

6. we already have the files but you can also generate a `requirements.txt` to ensure your app is running the proper python library versions with:
   - pip freeze > requirements.txt  (might just work for `Linux` I'll double check `Windows` later)

---

## HEROKU

1. make an account at [heroku.com](https://www.heroku.com/) (verify the account with the email account you used to setup)
2. login to Heroku and at your dashboard you want to`Create New App` - click this button
3. on the next page, give the app a name and then click `Create app`
4. Be sure that your app repo has the `requirements.txt` and the `Procfile`
5. Be sure that your app is _its own repo_ (this can be a public repo on your personal `GitHub`)
   - to submit `Lab 3` for marking: you must copy the content of your repo into your `firstname_lastname` repo at `Robots` and include your `Heroku` `URL`
6. This will let you connect Heroku to your GitHub repo of your app (right now it could be called `sample_site` if you copied the example from class contained here)
7. So select the `connect to GitHub` option and link your repo (probably you will have to login to `GitHub` if you haven't already)
8. Select `Manual Deploy` and the `branch` (probably it is `main`)
9. If the build is successful you can now `View App` (get the `URL` to share!)


---

## Test the app

1. To check the visual content of the `index.html` file we just drag the file from our folder to a browser (or `open with` and select a browser)
2. To check the app itself with the local server we do the following:
   - run the app with (use your python version same as before): 
     - python3 app.py 
   - open a browser window and type the following as a `URL` (both options do the same thing so only need to use one):
     - localhost:5000
     - 127.0.0.1:5000
     - (localhost _is_ 127.0.0.1)
3. To check the app after deploying on `Heroku`:
   - type the `URL` you are given from `Heroku`
   - in my case I named the app `eecsweb` so I use the `URL`:
     - [https://eecsweb.herokuapp.com/](https://eecsweb.herokuapp.com/)
