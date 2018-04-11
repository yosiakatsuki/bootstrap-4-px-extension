# bootstrap-4-px-extension

Bootstrap 4を使いつつPaddingとかMarginとかいろいろpx指定でやらなきゃいけない時のツール

## 指定できるプロパティ
- margin
- padding
- font-size

## 指定方法

Bootstrap 4のSpacingの指定に`px`を追加する

`{property}{sides}-px-{size}` or `{property}{sides}-px-{breakpoint}-{size}`

`{size}`は整数 1~100

## カスタマイズ

SCSSファイルにて`{size}`のカスタマイズが可能

+ `$start`: 開始サイズ
+ `$end`: 終了サイズ
+ `$step`: 間隔

## 注意事項

ファイルサイズが重くなりがちなので間隔を調整したファイルを適宜選択する  
ファイルの末尾の数字が間隔を表している

例：`~~-5.css`: 5px間隔で指定可能なファイル
