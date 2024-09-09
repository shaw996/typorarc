# How to use?

## 1. Clone repository
```shell
git clone git@github.com:shaw996/typorarc.git
```

## 2. Modify variables in `scripts/upload.sh`

```shell
# Repository location
LOCAL_REPO_PATH=[Your local Repo path]

# Git
REMOTE_REPO_PATH=[Your remote Repo path]
## Or gitee
# REMOTE_REPO_PATH=[Your remote Repo path]
```

## 3. Find `Typora -> Settings -> Image`

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

![image-20240909163417367](/Users/liudaodan/Downloads/image-20240909163417367.png)
