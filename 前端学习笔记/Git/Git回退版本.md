## Git 回退版本

概念： 把版本某个版本对应的内容快照，恢复到工作区/暂存区

查看提交历史：git log --online

回退命令：
git reset --soft 版本号 （其他文件未跟踪）
git reset --hard 版本号  
git reset --mixed 版本号 （与git reset等价）

注意1： 只有记录在版本库的提交记录才能恢复
注意2： 回退后，继续修改 -> 暂存 -> 提交操作即可 （产生新的提交记录过程）
