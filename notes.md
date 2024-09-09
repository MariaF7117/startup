## This Page is for Notes for the Midterm and Final

### Github Assignment (What I Learned)
  The biggest thing I learned from this assignment was how to resolve merge conflicts in github. Very vital information to know for the future, so here is some documentatio for future Maria.
```sh
➜  git fetch
➜  git status
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)

➜  git pull

Auto-merging test.md
CONFLICT (content): Merge conflict in test.md
Automatic merge failed; fix conflicts and then commit the result.
```

We resolve the conflict by modifying the file to remove the textual conflict delimiters and modifying the file to keep the changes we want. When we are done editing, our file contains what we want from both commits.

```sh
➜  git commit -am "merge(notes) combined both edits"
➜  git push
```
These notes are taken from the gitHub.md assignment which full documentation can be found here [GitHub Assignemnt](https://github.com/webprogramming260/.github/blob/main/profile/essentials/gitHub/gitHub.md)