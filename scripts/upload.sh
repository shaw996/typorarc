#!/bin/bash

# Repository location
LOCAL_REPO_PATH="/Users/liudaodan/Downloads/个人/项目/typorarc"

# Git
REMOTE_REPO_PATH="https://github.com/shaw996/typorarc/raw/master"
## Or Gitee
# REMOTE_REPO_PATH="https://gitee.com/shaw996/typorarc/raw/master"

# Log file path
LOG_FILE="${LOCAL_REPO_PATH}/typora_upload.log"


# Clear log
> ${LOG_FILE}

# Traverse file paths
for file_path in "$@"
do
  # Check $file_path
  if [ ! -n "${file_path}" ] ; then
      echo "Usage: imgup [image path]"
      exit 1
  fi

  # Change directory
  cd ${LOCAL_REPO_PATH} || { echo "Failed to change directory to ${LOCAL_REPO_PATH}" >> ${LOG_FILE}; exit 1; }

  # Get file name
  file_name=$(basename "${file_path}")

  # Copy file
  cp "${file_path}" "${LOCAL_REPO_PATH}/src/${file_name}" && { echo "Copy ${file_path} to ${LOCAL_REPO_PATH}/src/${file_name}" >> ${LOG_FILE}; }  || { echo "Failed to copy ${file_path} to ${LOCAL_REPO_PATH}/src/${file_name}" >> ${LOG_FILE}; exit 1; }

  # Upload to repository
  git add . >> ${LOG_FILE} 2>&1 && git commit -m "${file_name}" >> ${LOG_FILE} 2>&1 && git push -u origin master >> ${LOG_FILE} 2>&1

  # Check if git commands failed
  if [ $? -ne 0 ]; then
    echo "Git operation failed. Check ${LOG_FILE} for details."
    exit 1
  fi

  if [[ "${REMOTE_REPO_PATH}" =~ ^https://github.com ]]; then
    # Git
    echo "${REMOTE_REPO_PATH}/src/${file_name}?raw=true"
  elif [[ "${REMOTE_REPO_PATH}" =~ ^https://gitee.com ]]; then
    # Gitee
    echo "${REMOTE_REPO_PATH}/src/${file_name}"
  else
    echo "Unknown repository '${REMOTE_REPO_PATH}'. Check ${LOG_FILE} for details." >> ${LOG_FILE}
  fi
done
