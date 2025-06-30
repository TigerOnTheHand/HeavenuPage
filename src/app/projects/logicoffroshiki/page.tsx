import Link from "next/link";
import { client } from '../../../../libs/microcms';

// ブログ記事の型定義
type Props = {
  id: string;
  title: string;
};

// microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'phase1', // 'blog'はmicroCMSのエンドポイント名
    queries: {
      fields: 'id',  // idとtitleを取得
      limit: 1,  // 最新の5件を取得
    },
  });
  return data.contents;
}


export default async function Page() {
  const posts = await getBlogPosts();

  return (
	<div>
    男は考えた。しかし考えることすらできなかった。それはかつて男が持っていた論理のふろしきをどこかへ失くしてしまったからだ。
    <br></br>
    失くしてしまった論理のふろしきを再生するための方法は以下の通りと仮定した。
    <br></br>
    <br></br>
    1.Input(学習)→2.Output(模倣)→3.Stimulate(ブラックボックスの活性化)
    <br></br>
    <br></br>

    男はそれぞれの段階に一か月の期間を設けることにした。

    <br></br>
    <br></br>
    <br></br>

    <Link href={`/projects/logicoffroshiki/${posts[0].id}`}>1.Input(学習)の記録はこちら</Link>
  </div>
  )
}