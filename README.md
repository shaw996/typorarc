# How to use?

## 1. Clone repository
```shell
git clone [Remote repo path]
```

## 2. Modify variables in `scripts/upload.sh`

```shell
# Repository location
LOCAL_REPO_PATH=[Your local repo path]

# Git
REMOTE_REPO_PATH=[Your remote repo path]
## Or gitee
# REMOTE_REPO_PATH=[Your remote Repo path]
```

## 3. Find `Typora -> Settings -> Image`

![image-20240909163417367](https://github.com/shaw996/typorarc/raw/master/src/image-20240909163417367.png?raw=true)

### When Insert Images

Choose `Upload image`

### Image Upload Setting

#### Image Uploader
Choose `Custom Command`

#### Command
Enter content below (Replace with your real script's path):
```shell
Bash /Users/[Your directory]/typorarc/scripts/upload.sh
```
