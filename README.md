# project1



### git远程仓库操作
```bash 
# 克隆远程仓库到本地
$ git clone https://github.com/RunTuGoGoing/project1.git

# 设置远程仓库地址
$ git remote add origin https://github.com/RunTuGoGoing/project1.git

# 查看所有远程仓库源
$ git remote 

# 查看源路径
$ git remote get-url origin

# 将本地仓库推送到远程仓库
$ git push -u origin main
```



### 分支操作
```bash
# 查看分支
$ git branch

# 创建分支
$ git branch 分支名

# 切换分支
$ git checkout 分支名

# 合并分支
$ git merge 分支名

# 拉取远程分支
$ git pull origin 分支名
```

