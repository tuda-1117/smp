import React from 'react';
// CSSファイルをインポートします
import './TechnicalGuide.css';

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
              テクニカルガイド<span>クリアファイルデータ作成時チェックポイント</span>
            </h1>
            {/* インラインスタイルはJavaScriptオブジェクトに変換 */}
            <h2 style={{ padding: '0 0 15px' }}>
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
                    style={{ display: 'block', width: '35%', fontSize: '100%' }}
                  >
                    WEBでデザインについて詳細はこちら
                  </a>
                </span>
                {/* 同上 */}
                <span className="designmode_on">
                  <a
                    href="/index_w2p.html"
                    style={{ display: 'block', width: '35%', fontSize: '100%' }}
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
                <li><a href="illustrator/tonbo.html">トンボについて</a></li>
                <li><a href="illustrator/nuri.html">塗り足しについて</a></li>
                <li><a href="illustrator/colormode.html">カラーモードについて</a></li>
                <li><a href="illustrator/layer.html">レイヤーについて</a></li>
                <li><a href="illustrator/picture.html">配置画像について</a></li>
                <li>
                  <a href="illustrator/font.html">文字のアウトライン化について</a>
                </li>
                <li><a href="illustrator/line.html">線・塗りの設定について</a></li>
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
                  <a href="illustrator/kouka.html">各種効果を使用する際の注意</a>
                </li>
                <li><a href="illustrator/save.html">保存について</a></li>
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
                <li><a href="photoshop/picture.html">解像度について</a></li>
                <li>
                  <a href="photoshop/colormode.html">カラーモードについて</a>
                </li>
                <li><a href="photoshop/layer.html">レイヤーについて</a></li>
                <li><a href="photoshop/save.html">保存について</a></li>
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