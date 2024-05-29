import Tes from "../pageTransition/tes";

export default function Coba() {
  const initialPath = `
    M0 300 
    Q${1920 / 2} 0 ${1920} 300
    L${1920} ${1080 + 300}
    Q${1920 / 2} ${1080 + 600} 0 ${1080 + 300}
    L0 0
`;

  const targetPath = `
    M0 300
    Q${1920 / 2} 0 ${1920} 300
    L${1920} ${1080}
    Q${1920 / 2} ${1080} 0 ${1080}
    L0 0
`;
  return (
    // <div className="w-full h-screen bg-gray-300 border">
    <Tes>
      {/* <svg viewBox={`0 0 ${1920} ${1080 + 600}`} className="bg-green-600">
        <path d={targetPath} />
      </svg> */}
    </Tes>
    // </div>
  );
}
