
#!/bin/sh

git filter-branch -f --env-filter "
    GIT_AUTHOR_NAME='mpoapostolis'
    GIT_AUTHOR_EMAIL='mpoapostolis@gmail.com'
    GIT_COMMITTER_NAME='mpoapostolis'
    GIT_COMMITTER_EMAIL='mpoapostolis@gmail.com'
  " HEAD
