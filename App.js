export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        font-family: Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif;
      }
      html {
        height: 100%;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        line-height: 1.15;
      }
      body {
        margin: 0;
        min-height: 100%;
        padding: 25px 20px;
        overflow-x: hidden;
        position: relative;
      }
      p {
        font-size: 14px;
        line-height: 24px;
      }
    `}</style>
  </main>
)
