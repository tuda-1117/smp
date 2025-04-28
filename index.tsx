import React from "react";
// CSSファイルをインポートします
import "./TechnicalGuide.css";

// seedoincludeで読み込まれていたと思われる要素は、
// 実際のReactアプリでは対応するコンポーネントをインポートして使用します。
// 例:
// import Header from './components/Header';
// import Footer from './components/Footer';
// import SideBnr from './components/SideBnr';
// import Side from './components/Side';
// import CommonInclude from './components/CommonInclude';

const TechnicalGuidePage: React.FC = () => {
  // <head>タグ内の要素（タイトル、メタデータなど）は、
  // react-helmet-async などのライブラリやフレームワーク機能で管理します。
  // このコンポーネントのreturn内には含めません。
  // 例:
  // <Helmet>
  //   <meta charset="utf-8" />
  //   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //   <title>テクニカルガイド | オリジナルクリアファイルの印刷・通販はボラネット</title>
  //   <meta name="keywords" content="..." />
  //   <meta name="description" content="..." />
  // </Helmet>

  return (
    // 元の<body>タグ内の内容をここに配置します。
    // 一番外側を単一の要素（例: divまたは<>）でラップします。
    <div id="container">
      {/* 元: <div seedoinclude="/include/header.html"></div> */}
      {/* 実際のアプリではここに <Header /> のようなコンポーネントを配置します */}
      <div>{/* ヘッダーコンテンツのプレースホルダー */}</div>

      {/* contents_START */}
      <div id="contents">
        <ol id="path">
          <li>
            <a href="https://www.bora-net.com/index.html">
              オリジナルクリアファイルの印刷・通販はボラネット
            </a>
            &gt;
          </li>
          <li>テクニカルガイド</li>
        </ol>

        {/* main_START */}
        <div id="main">
          <article id="technical-guide">
            <h1>
              テクニカルガイド
              <span>クリアファイルデータ作成時チェックポイント</span>
            </h1>
            {/* インラインスタイルはJavaScriptオブジェクトに変換 */}
            <h2 style={{ padding: "0 0 15px" }}>
              ボラネットのデータ作成方法は下記の３種類からお選びいただけます
            </h2>

            <h3>
              ● illustratorもしくはPhotoshopでのデータ作成
              <img
                src="/guide/img/adobe_logo.png"
                alt="illustrator"
                width="70" // width, height属性は元のまま
                height="auto"
                className="iml10" // class -> className
              />
            </h3>
            <div className="adtxbox">
              すべての商品に対応している作成方法です。
              <br />
              <a href="https://www.bora-net.com/beginner/list.html">
                テンプレートダウンロードページ
              </a>
              からテンプレートをダウンロードいただき、
              <br />
              本ページのアプリケーションごとのチェックポイントやテンプレートに同梱されているマニュアルをご参照いただきながらデータの作成をお願いします。
            </div>

            <h3>
              ● Officeソフトでのデータ作成
              <img
                src="/guide/img/office_logo.png"
                alt="office"
                width="115"
                height="auto"
                className="iml10"
              />
            </h3>
            <div className="adtxbox">
              一部の商品では、Officeソフトでも作成いただけます。
              <br />
              Officeソフトをご利用の場合は、「
              <a href="/office/index.html">Microsoft Officeのご利用について</a>
              」のページにて詳細をご確認ください。
            </div>

            <h3>
              ● WEBでデザインでのデータ作成
              <img
                src="/guide/img/web_deza_logo.png"
                alt="WEBでデザイン"
                width="60"
                height="auto"
                className="iml10"
              />
            </h3>
            {/* class="adtxbox nolin" -> className="adtxbox nolin" */}
            <div className="adtxbox nolin">
              一部の商品では、当社ホームページ内で簡単にデザイン制作ができる「WEBでデザイン」をご利用いただきデータ作成いただけます。
              <br />
              写真などをアップロードするだけで簡単にデータ作成が可能な、無料で使えるデザインテンプレートも多数ご用意しています。
              <br />
              WEBでデザインをご利用の場合は、「
              {/* class="adwbdz" -> className="adwbdz" */}
              <div className="adwbdz">
                {/* onclick属性はReactのonClickハンドラに書き換える必要がありますが、
                    ここでは構造変換のため削除またはコメントアウトします。
                    例: <span className="designmode_off" onClick={() => chgStyleDesign('1')}> */}
                {/* style属性をJavaScriptオブジェクトに変換 */}
                <span className="designmode_off">
                  <a
                    href="/index_w2p.html"
                    style={{ display: "block", width: "35%", fontSize: "100%" }}
                  >
                    WEBでデザインについて詳細はこちら
                  </a>
                </span>
                {/* 同上 */}
                <span className="designmode_on">
                  <a
                    href="/index_w2p.html"
                    style={{ display: "block", width: "35%", fontSize: "100%" }}
                  >
                    WEBでデザインについて詳細はこちら
                  </a>
                </span>
              </div>
              」専用ページにて詳細をご確認ください。
            </div>

            <section className="list">
              <h2>
                <a href="illustrator/">
                  <img
                    src="../image/guide/h2_illustrator.gif"
                    alt="illustratorのチェクポイント"
                    width="700"
                    height="40"
                  />
                </a>
              </h2>
              <ul>
                <li>
                  <a href="illustrator/tonbo.html">トンボについて</a>
                </li>
                <li>
                  <a href="illustrator/nuri.html">塗り足しについて</a>
                </li>
                <li>
                  <a href="illustrator/colormode.html">カラーモードについて</a>
                </li>
                <li>
                  <a href="illustrator/layer.html">レイヤーについて</a>
                </li>
                <li>
                  <a href="illustrator/picture.html">配置画像について</a>
                </li>
                <li>
                  <a href="illustrator/font.html">
                    文字のアウトライン化について
                  </a>
                </li>
                <li>
                  <a href="illustrator/line.html">線・塗りの設定について</a>
                </li>
                <li>
                  <a href="illustrator/sumibeta.html">
                    スミベタ・リッチブラックについて
                  </a>
                </li>
                <li>
                  <a href="illustrator/print.html">
                    オーバープリント（スミノセ）について
                  </a>
                </li>
                <li>
                  <a href="illustrator/kouka.html">
                    各種効果を使用する際の注意
                  </a>
                </li>
                <li>
                  <a href="illustrator/save.html">保存について</a>
                </li>
              </ul>
              <p>
                <a href="pdf/illustrator.pdf" target="_blank">
                  <img
                    src="../image/guide/btn_pdf.gif"
                    alt="PDFダウンロード"
                    width="151"
                    height="35"
                  />
                </a>
                チェックポイントを印刷できるようになっています。
                <br />
                右ボタンからPDFをダウンロードしてご利用ください。
              </p>
            </section>

            <section className="list">
              <h2>
                <a href="photoshop/">
                  <img
                    src="../image/guide/h2_photoshop.gif"
                    alt="Photoshopのチェクポイント"
                    width="700"
                    height="40"
                  />
                </a>
              </h2>
              <ul>
                <li>
                  <a href="photoshop/picture.html">解像度について</a>
                </li>
                <li>
                  <a href="photoshop/colormode.html">カラーモードについて</a>
                </li>
                <li>
                  <a href="photoshop/layer.html">レイヤーについて</a>
                </li>
                <li>
                  <a href="photoshop/save.html">保存について</a>
                </li>
              </ul>
              <p>
                <a href="pdf/photoshop.pdf" target="_blank">
                  <img
                    src="../image/guide/btn_pdf.gif"
                    alt="PDFダウンロード"
                    width="151"
                    height="35"
                  />
                </a>
                チェックポイントを印刷できるようになっています。
                <br />
                右ボタンからPDFをダウンロードしてご利用ください。
              </p>
            </section>

            <section className="list">
              <h2>
                <a href="white/">
                  <img
                    src="../image/guide/h2_white.gif"
                    alt="白版の必要性と作り方"
                    width="700"
                    height="40"
                  />
                </a>
              </h2>
              <ul>
                <li>
                  <a href="white/need.html">白版の必要性</a>
                </li>
                <li>
                  <a href="white/pattern.html">白版作成パターン</a>
                </li>
                <li>
                  <a href="white/use_illustrator.html">
                    イラストレーターによる作成
                  </a>
                </li>
                <li>
                  <a href="white/use_photoshop.html">
                    フォトショップによる作成
                  </a>
                </li>
                <li>
                  <a href="white/point.html">白版作成のその他のポイント</a>
                </li>
              </ul>
              <p>
                <a href="pdf/hakuban.pdf" target="_blank">
                  <img
                    src="../image/guide/btn_pdf.gif"
                    alt="PDFダウンロード"
                    width="151"
                    height="35"
                  />
                </a>
                チェックポイントを印刷できるようになっています。
                <br />
                右ボタンからPDFをダウンロードしてご利用ください。
              </p>
            </section>

            <section className="list">
              <h2>
                <a href="date/">
                  <img
                    src="../image/guide/h2_date.gif"
                    alt="よくある不備データ"
                    width="700"
                    height="40"
                  />
                </a>
              </h2>
              <ul>
                <li>
                  <a href="date/comp.html">完全データ入稿が基本です</a>
                </li>
                <li>
                  <a href="date/template.html">テンプレートに作っていない</a>
                </li>
                <li>
                  <a href="date/clearfile.html">
                    クリアファイルの白版が作っていない
                  </a>
                </li>
                <li>
                  <a href="date/nuri.html">塗り足しがない</a>
                </li>
                <li>
                  <a href="date/outline.html">
                    文字のアウトライン化がしていない
                  </a>
                </li>
                <li>
                  <a href="date/granularity.html">解像度が低い</a>
                </li>
                <li>
                  <a href="date/link.html">配置画像のリンクが切れている</a>
                </li>
                <li>
                  <a href="date/suminose.html">スミノセの失敗</a>
                </li>
              </ul>
              <p>
                <a href="pdf/fubidata.pdf" target="_blank">
                  <img
                    src="../image/guide/btn_pdf.gif"
                    alt="PDFダウンロード"
                    width="151"
                    height="35"
                  />
                </a>
                チェックポイントを印刷できるようになっています。
                <br />
                右ボタンからPDFをダウンロードしてご利用ください。
              </p>
            </section>

            {/* 元: <div seedoinclude="/include/common.html"></div> */}
            {/* 実際のアプリではここに <CommonInclude /> のようなコンポーネントを配置します */}
            <div>{/* 共通インクルードコンテンツのプレースホルダー */}</div>
          </article>
        </div>
        {/* main_END */}

        {/* aside_START */}
        <aside>
          {/* 元: <div seedoinclude="/include/side_bnr.html"></div> */}
          {/* 実際のアプリではここに <SideBnr /> のようなコンポーネントを配置します */}
          <div>{/* サイドバナーコンテンツのプレースホルダー */}</div>

          {/* 元: <div seedoinclude="/include/side.html"></div> */}
          {/* 実際のアプリではここに <Side /> のようなコンポーネントを配置します */}
          <div>{/* サイドコンテンツのプレースホルダー */}</div>
        </aside>
        {/* aside_END */}
      </div>
      {/* contents_END */}

      {/* contents2 - 元のHTMLでpathが重複していましたが、そのまま配置します */}
      <div id="contents2">
        <ol id="path">
          <li>
            <a href="https://www.bora-net.com/index.html">
              オリジナルクリアファイルの印刷・通販はボラネット
            </a>
            &gt;
          </li>
          <li>テクニカルガイド</li>
        </ol>
      </div>

      {/* 元: <div seedoinclude="/include/footer.html"></div> */}
      {/* 実際のアプリではここに <Footer /> のようなコンポーネントを配置します */}
      <div>{/* フッターコンテンツのプレースホルダー */}</div>
    </div>
  );
};

export default TechnicalGuidePage;
