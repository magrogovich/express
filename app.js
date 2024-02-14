var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



app.get('/client',(req,res)=>{
  res.json({
    "_id": {
      "$oid": "65cbe28382e6fc6121cc7457"
    },
    "user": "google-oauth2|105919245830348363535",
    "name": "jony",
    "cin": "00112233",
    "phone": "12345678",
    "email": "xyz@gmail.com",
    "birthday": {
      "$date": "2024-02-15T00:00:00.000Z"
    },
    "sex": "male",
    "joinDate": {
      "$date": "2024-02-04T00:00:00.000Z"
    },
    "password": "0000",
    "createdAt": {
      "$date": "2024-02-13T21:43:31.223Z"
    },
    "updatedAt": {
      "$date": "2024-02-13T21:43:31.223Z"
    },
    "__v": 0
  })
})

app.get('/form/:id',(req,res)=>{
  if(req.params.id == '65cbe28382e6fc6121cc7457'){
    res.json({
      "_id": {
        "$oid": "65cbe22282e6fc6121cc7430"
      },
      "user": "google-oauth2|105919245830348363535",
      "title": "Form 1",
      "questions": [
        {
          "question": "not?",
          "answers": [
            {
              "answer": "yes?",
              "points": 2,
              "_id": {
                "$oid": "65cbe22282e6fc6121cc7432"
              }
            },
            {
              "answer": "no?",
              "points": 1,
              "_id": {
                "$oid": "65cbe22282e6fc6121cc7433"
              }
            }
          ],
          "_id": {
            "$oid": "65cbe22282e6fc6121cc7431"
          }
        },
        {
          "question": "if it false?",
          "answers": [
            {
              "answer": "yes",
              "points": 1,
              "_id": {
                "$oid": "65cbe22282e6fc6121cc7435"
              }
            },
            {
              "answer": "no",
              "points": 0,
              "_id": {
                "$oid": "65cbe22282e6fc6121cc7436"
              }
            }
          ],
          "_id": {
            "$oid": "65cbe22282e6fc6121cc7434"
          }
        },
        {
          "question": "good?",
          "answers": [
            {
              "answer": "very good",
              "points": 4,
              "_id": {
                "$oid": "65cbe22282e6fc6121cc7438"
              }
            },
            {
              "answer": "good",
              "points": 3,
              "_id": {
                "$oid": "65cbe22282e6fc6121cc7439"
              }
            },
            {
              "answer": "bad",
              "points": 2,
              "_id": {
                "$oid": "65cbe22282e6fc6121cc743a"
              }
            },
            {
              "answer": "very bad",
              "points": 0,
              "_id": {
                "$oid": "65cbe22282e6fc6121cc743b"
              }
            }
          ],
          "_id": {
            "$oid": "65cbe22282e6fc6121cc7437"
          }
        }
      ],
      "createdAt": {
        "$date": "2024-02-13T21:41:54.136Z"
      },
      "updatedAt": {
        "$date": "2024-02-13T21:41:54.136Z"
      },
      "__v": 0
    })
  }
})

app.get('/boutique',(req,res)=>{
  res.json({
    "_id": {
      "$oid": "65cbe19782e6fc6121cc741e"
    },
    "user": "google-oauth2|105919245830348363535",
    "title": "Boutique 1",
    "address": "azur city",
    "members": "ahmed, salah, mounir",
    "createdAt": {
      "$date": "2024-02-13T21:39:35.332Z"
    },
    "updatedAt": {
      "$date": "2024-02-13T21:39:35.332Z"
    },
    "__v": 0
  })
})

app.get('/tasks/:id',(req,res)=>{
  if(req.params.id == '65cbe28382e6fc6121cc7457'){
    res.json({
      "_id": {
        "$oid": "65cbe28f82e6fc6121cc746b"
      },
      "user": "google-oauth2|105919245830348363535",
      "client": {
        "$oid": "65cbe28382e6fc6121cc7457"
      },
      "boutique": {
        "$oid": "65cbe19782e6fc6121cc741e"
      },
      "form": {
        "$oid": "65cbe22282e6fc6121cc7430"
      },
      "status": "In Progress",
      "createdAt": {
        "$date": "2024-02-13T21:43:43.740Z"
      },
      "updatedAt": {
        "$date": "2024-02-13T21:43:43.740Z"
      },
      "__v": 0
    })
  }
})

app.post('/:id',(req,res)=>{
  if(req.params.id == '65cbe28382e6fc6121cc7457'){
    res.json({message:'done!'})
  }
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
