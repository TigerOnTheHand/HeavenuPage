import { client } from '../../../../../libs/microcms';

// ブログ記事の型定義
type Props = {
  id: string;
  body: string;
};

// microCMSから特定の記事を取得
async function getBlogPost(id: string): Promise<Props> {
  const data = await client.get({
    endpoint: `phase1/${id}`,
  });
  return data;
}

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // IDを取得
  const post = await getBlogPost(id);

  return (
    <main>
      <div dangerouslySetInnerHTML={{ __html: post.body }} /> {/* 記事本文を表示 */}
    </main>
  );
}

// 静的パスを生成
export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: 'phase1' });

  return contentIds.map((contentId) => ({
    id: contentId, // 各記事のIDをパラメータとして返す
  }));
}