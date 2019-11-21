import React from 'react'

import Typography from '@material-ui/core/Typography'
import FunFact from './FunFact'


const facts = [ 
    {
        title: `true fact`,
        description: `jody loves twice, mamamoo, and blackpink`
    },
    {
        title: `fact two`,
        description: `solar, moonbyul, wheein, and hwasa are members of mamamoo`
    },
    {
        title: `erika`,
        description: `wonderful`
    }

];


function FactList () {
    const funFacts = facts.map(o => 
        <FunFact key={o.title} {...o}/>
    );
    return (
        <div>
            <Typography>Some fun facts about me...</Typography>
            {funFacts}
        </div>
    );
}

export default FactList;
