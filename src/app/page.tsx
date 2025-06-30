import Link from "next/link";

export default function Home() {
  return (
    <div>
      <SoundCloudEmbed />
      
      <span>リンク集</span>
      <ul>
        <li><Link href="https://x.com/vogel_park">X へぶんぬ</Link></li>
        <li><Link href="https://www.youtube.com/@%E3%81%84%E3%81%8B%E3%82%81%E3%81%97%E3%81%88%E3%81%99%E3%81%9F%E3%81%99">Youtube いかめし / えすたす（別名義）</Link></li>
        <li><Link href="https://www.nicovideo.jp/user/138834335">ニコニコ動画 へぶんぬ</Link></li>
        <li><Link href="https://soundcloud.com/heavennu">soundcloud へぶんぬ</Link></li>
      </ul>
    </div>
  );
}

function SoundCloudEmbed() {
  return (
    <div>
      <iframe
        width="50%"
        height="300"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2088152358&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
      <div
        style={{
          fontSize: '10px',
          color: '#cccccc',
          lineBreak: 'anywhere',
          wordBreak: 'normal',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
          fontWeight: 100,
        }}
      >
        <a
          href="https://soundcloud.com/heavennu"
          title="へぶんぬ"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          へぶんぬ
        </a>
        {' · '}
        <a
          href="https://soundcloud.com/heavennu/dohdwt3lcxsm"
          title="ねこね"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#cccccc', textDecoration: 'none' }}
        >
          ねこね
        </a>
      </div>
    </div>
  );
}
