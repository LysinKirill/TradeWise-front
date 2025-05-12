import { ResearchTable } from './components/researchTable';
import { researchData } from './constants';
import * as UI from './styles';

export const Research = () => {
  return (
    <UI.PageResearch>
      <UI.Title>Market Research</UI.Title>
      <UI.ResearchSection>
        <ResearchTable data={researchData} />
      </UI.ResearchSection>
    </UI.PageResearch>
  );
};

export default Research;