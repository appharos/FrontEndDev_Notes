## Git 分支 （重点）

概念： 本质上是指向 **提交节点**的可变**指针**，默认名字是master
注意： HEAD 指针影响工作区/暂存区的代码状态

使用场景：
开发新需求/修复Bug, 保证主线代码随时可用，多人协同开发提高效率

分支：
需求：创建内容列表content分支，并产生3次提交记录

步骤：

1. 创建分支命令： git branch 分支名
2. 切换分支命令： git checkout 分支名
3. 工作区准备代码并暂存提交，重复3次

## 分支—-合并与删除

需求； 把login-bug 合并回到master分支并删除 login-bug分支
步骤：

1. 切回到要合入的分支上：git checkout master
2. 合并其他分支过来： git merge login-bug
3. 删除合并后的分支指针： git branch -d login-bug

## 分支-合并和提交

合并提交：发生于原分支产生了新的提交记录后，再合并回去时发生，自动使用多个快照记录合并后产生一次新的提交步骤：

1. 切回到要合入的分支上：git checkout master
2. 合并其他分支过来： git merge content
3. 删除合并后的分支： git branch -d content

## 分支-合并冲突

需求1：基于master新建publish 分支，完成发布文章业务， 然后修改内容页面的html文件的title标签，并提交一次
需求2：切换到master， 也在修改内容页面的html文件的title标签，并提交一次
冲突：把publish分支合并到master回来，产生合并冲突

概念： **不同分支**中，对**同一个文件**的**同一部分**修改，Git 无法干净的合并，产生合并冲突

解决方法：

1. 打开VSCode找到冲突文件并手动解决
2. 解决后需要提交一次记录
