import getQiita from "./getQiita";
import getZenn from "./getZenn";


const getArticles = async () => {
  const qiita = await getQiita(1);
  const zenn = await getZenn();
  return qiita
  .concat(zenn)
  .sort((a, b) => b.created_at.getTime() - a.created_at.getTime())
  .map((article, index) => { article.id = index; return article; });
}

export default getArticles;