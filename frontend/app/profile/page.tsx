import Link from "next/link";

const basicInfo = [
  { label: 'Name', value: () => <>{'Ryuki Yamamoto'}</> },
  { label: 'Twitter', value: () => <Link href="https://twitter.com/i4mwh4ti4m" className="underline underline-offset-2" target={'_blank'}>たつお(@i4mwh4ti4m)</Link> },
  { label: 'GitHub', value: () => <Link href="https://github.com/t4t5u0" className="underline underline-offset-2" target={'_blank'}>t4t5u0</Link> },
]

const skills = [
  { stack: 'Backend', skills: ['Python', 'Go', 'Rust', 'Docker'] },
  { stack: 'Frontend', skills: ['TypeScript', 'Next.js'] },
]

const likes = [
  {
    label: 'Spotify',
    value: () =>
      <>
        {'2022年は1500時間聴いていたらしい'}
        <br />
        <Link 
        href={"https://twitter.com/search?q=%23%E3%81%9F%E3%81%A4%E3%81%8A%E3%81%AE%E5%A5%BD%E3%81%8D%E3%81%AA%E6%9B%B2&src=hashtag_click&f=live"}
        className={"underline underline-offset-2"}
        target={'_blank'}
        >
          #たつおの好きな曲
        </Link>
      </>
  },
  {
    label: 'Overwatch2',
    value: () =>
      <>
        {'ラインハルトがお気に入り'}
      </>
  },
]

const BasicInfo = () => {
  return (
    <div>
      <h3 className="mb-3">Basic</h3>
      <table className="table-auto">
        <tbody>
          {basicInfo.map((info, index) => (
            <tr key={index}>
              <th className="px-4 py-2 text-left">{info.label}</th>
              <td className="px-4 py-2">{info.value()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


const Skills = () => {
  return (
    <div>
      <h3 className="mb-3">Skills</h3>
      {skills.map((skill, index) => {
        return (
          <div key={index}>
            <div className="ml-8">
              <h4>{skill.stack}</h4>
              <ul className="ml-8">
                {skill.skills.map((skill, jndex) => {
                  return <li className="list-disc" key={jndex}>{skill}</li>
                })}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const Likes = () => {
  return (
    <div>
      <h3>Likes</h3>
      <table className="table-auto">
        <tbody>
          {likes.map((like, index) => (
            <tr key={index}>
              <th className="px-4 py-2 text-left">{like.label}</th>
              <td className="px-4 py-2">{like.value()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const bio = [
  { year: 2000, month: 9, content: '出生' },
  { year: 2019, month: 2, content: '応用情報技術者試験合格' },
  { year: 2019, month: 4, content: '大学入学' },
]


const Bio = () => {
  return (
    <div>
      <h3 className="mb-3">Biography</h3>
      <table>
        <tbody>
          {bio.map((item, index) => (
            <tr key={index}>
              <th className="px-4 py-2 text-left grid grid grid-cols-[1fr_24px_24px]">{item.year}年
                <span className="text-right">
                  {item.month}
                </span>
                月
              </th>
              <td className="px-4 py-2">{item.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Page = () => {
  return (
    <div className="font-serif">
      <h2 className="mb-4 text-lg">Profile</h2>
      <div className="grid grid-cols-2 gap-4">
        <BasicInfo />
        <Likes />
        <Skills />
        <Bio />
      </div>
    </div>
  );
};

export default Page;
