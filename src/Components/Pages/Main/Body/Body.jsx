import { Route, Routes } from "react-router-dom";
import Cost from "../../MiniPages/Cost/Cost";
import News1 from "../../MiniPages/News/News1";
import News2 from "../../MiniPages/News/News2";
import News3 from "../../MiniPages/News/News3";
import Activsoft from "../../MiniPages/Partners/Activsoft/Activsoft";
import Cbi from "../../MiniPages/Partners/Cbi/Cbi";
import Code from "../../MiniPages/Partners/Code/Code";
import DrWEB from "../../MiniPages/Partners/DrWeb/DrWEB";
import Eset from "../../MiniPages/Partners/ESET/Eset";
import Fortinet from "../../MiniPages/Partners/Fortinet/Fortinet";
import Gasinformservice from "../../MiniPages/Partners/Gasinformservice/Gasinformservice";
import Ideco from "../../MiniPages/Partners/IDECO/Ideco";
import Okb from "../../MiniPages/Partners/Okb/Okb";
import Partners from "../../MiniPages/Partners/Partners";
import Phishman from "../../MiniPages/Partners/Phishman/Phishman";
import Positivtechnologies from "../../MiniPages/Partners/PositiveTechologies/PositiveTechnologies";
import Trukonf from "../../MiniPages/Partners/Trukonf/Trukonf";
import Vacancy from "../../MiniPages/Vacancy/Vacancy";
import General from "../General/General";
import GeneralSecond from "../General/GeneralSecond";
import styles from './Body.module.css';

const Body = () => {
   return(
      <div className={styles.bodystyle}>
         <Routes>
            <Route path="/" element={<General />} />
            <Route path='/#service' element={<GeneralSecond />} />
            <Route path='/Partners' element={<Partners />} />
           
            <Route path='/Vacancy' element={<Vacancy />} />
            <Route path='/Cost' element={<Cost />} />

            <Route path='/ESET' element={<Eset />} />
            <Route path='/Activsoft' element={<Activsoft />} />
            <Route path='/Cbi' element={<Cbi />} />
            <Route path='/Code' element={<Code />} />
            <Route path='/DrWEB' element={<DrWEB />} />
            <Route path='/Fortinet' element={<Fortinet />} />
            <Route path='/Gasinformservice' element={<Gasinformservice />} />
            <Route path='/Ideco' element={<Ideco />} />
            <Route path='/Okb' element={<Okb />} />
            <Route path='/Phishman' element={<Phishman />} />
            <Route path='/Positivtechnologies' element={<Positivtechnologies />} />
            <Route path='/Trukonf' element={<Trukonf />} />

            <Route path='/News1' element={<News1 />} />
            <Route path='/News2' element={<News2 />} />
            <Route path='/News3' element={<News3 />} />
         </Routes>
      </div>
   )
}
export default Body;