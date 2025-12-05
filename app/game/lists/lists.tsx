import * as truthsSafe from '../../../data/truth/truthSafe';
import * as daresSafe from '../../../data/dare/dareSafe';
import * as truthsDalhe from '../../../data/truth/truthDalhe';
import * as daresDalhe from '../../../data/dare/dareDalhe';
import * as truthsCaliente from '../../../data/truth/truthCaliente';
import * as daresCaliente from '../../../data/dare/dareCaliente';
import * as truthsProibidano from '../../../data/truth/truthProibidano';
import * as daresProibidano from '../../../data/dare/dareProibidano';
import * as truthsGb from '../../../data/truth/truthGb';
import * as daresGb from '../../../data/dare/dareGb';

const lists = {
  safe: {
    truths: truthsSafe.truthSafe,
    dares: daresSafe.dareSafe,
  },
  dalhe: {
    truths: truthsDalhe.truthDalhe,
    dares: daresDalhe.dareDalhe,
  },
  caliente: {
    truths: truthsCaliente.truthCaliente,
    dares: daresCaliente.dareCaliente,
  },
  proibidano: {
    truths: truthsProibidano.truthProibidano,
    dares: daresProibidano.dareProibidano,
  },
  gb: {
    truths: truthsGb.truthGb,
    dares: daresGb.dareGb,
  },
};

export default lists;
