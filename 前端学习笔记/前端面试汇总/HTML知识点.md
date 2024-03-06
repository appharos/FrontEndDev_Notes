**HTML**

1. 文档声明概念

- HTML文档通常以文档声明开始，该声明的作用是帮助浏览器确定其尝试解析和显示的HTML文档类型。

- HTML的文档声明，也称为DOCTYPE（Document Type Declaration），是一种指令，用于告诉浏览器该网页使用的HTML版本。文档声明应位于HTML文档的第一行，位于<html>标签之前。它不是一个HTML标签；它是一种指令，向浏览器指示网页的文档类型和版本。

- 文档声明对于确保浏览器正确渲染网页非常重要，因为不同的HTML版本有不同的规则。如果省略文档声明，浏览器可能会进入“怪异模式”，在该模式下，网页的渲染方式可能与预期不同，因为浏览器会采用向后兼容的方式来解释网页代码。

### 例子:

1. HTML5文档声明:
   ```html
   <!DOCTYPE html>
   ```
   这是当前最新版本的HTML（HTML5）的文档声明。它简洁明了，告诉浏览器页面使用HTML5标准。

2. HTML 4.01 Strict文档声明:
   ```html
   <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
   ```
   这个声明是用于HTML 4.01版本，其中“Strict”模式表示该文档遵循严格的HTML规范，不包含任何已废弃的元素和属性。

3. XHTML 1.0 Transitional文档声明:
   ```html
   <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   ```
   这个声明用于XHTML 1.0版本，在“Transitional”模式下，它允许包含一些HTML4时代遗留的元素和属性。

### 注意：

- 自HTML5开始，文档声明被大大简化，只需`<!DOCTYPE html>`即可，因为HTML5旨在向后兼容旧版本的HTML，并支持现代网络的需求。
- 在编写HTML文档时，始终包含正确的文档声明，以确保网页在各种浏览器和设备上以最佳方式渲染。

2. 