export default function Pageview({ params }) {
  const viewer = useRef(null);

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/webviewer/lib',
          initialDoc: '/files/document.pdf',
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
      });
    });
  }, []);
  return (
    <div className="mt-20">
     <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
    </div>
  );
}
