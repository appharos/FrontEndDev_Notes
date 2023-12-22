## Git 暂存区使用

暂存区：暂时存储，可以临时恢复代码内容，与版本库解耦
暂存区  -> 覆盖 -> 工作， 命令： git restore目标文件（注意：完全确认覆盖时使用）
从暂存区移除文件， 命令： git rm --cached 目标文件

git ls-files： 查看暂存区文件

git log --oneline 查看提交历史
