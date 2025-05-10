# sharp-bug-1

Steps to reproduce:

- On Windows, I'm not sure whether this bug exists in other OS.
- Run `node main.js`

Expected: two image `图片1.avif` and `图片2.avif` are created, and the process successfully exit.

Actual: only `图片1.avif` be created, and the process exited with `0xC0000409`

Also see [the GitHub Action](https://github.com/Kaciras/sharp-bug-1/actions/runs/14945660040/job/41988618804#step:6:19) for the result.
