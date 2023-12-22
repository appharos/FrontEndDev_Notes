## Git 远程仓库

概念： 托管再因特网或其他网络中的你的项目的版本库

作用：保存版本库的历史记录，多人协作
创建： 公司自己服务器 / 第三方托管平台 （Gitee, GitLab, GitHub）

需求： 创建远程版本库，并把本地Git 仓库推送上去保存
步骤：

1. 注册第三方托管平台网站账号
2. 新建仓库得到远程仓库Git 地址
3. 本地Git 仓库添加远程仓库原点地址
命令： git remote add 远程仓库别名 远程仓库地址
例如： git remote add origin <https://gitee.com/lidongxu/work.git>

4. 本地 Git 仓库推送版本记录到远程仓库
命令: git push -u 远程仓库别名 本地和远程分支名
例如: git push -u origin master
完整写法： git push --set-upstream origin master:master

去除本地链接的远程仓库
git remote remove 仓库备注名称

查看本地绑定的远程仓库
git remote  -v

切换已经绑定的远程仓库的github账户

1. 需要到window控制面板-> 用户账户 -> 凭据管理器 ， 删除本地电脑原先连接的远程账户的账号和信息

## Git 远程仓库克隆

克隆： 拷贝一个Git 仓库到本地，进行使用

命令： git clone

## 多人协同开发

需求： 新代码共享给别人

步骤：

想要看到别人同步上去的最新内容:
git pull origin master
等价于以下两句代码（了解）

- git fetch origin master:master(获取远程分支记录到本地，未合并)
- git merge origin/master（把远程分支记录合并到所在分支下）
