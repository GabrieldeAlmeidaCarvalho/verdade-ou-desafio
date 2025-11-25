import * as truthsSafe from './truth/truthSafe';
import * as daresSafe from './dare/dareSafe';
import * as truthsDalhe from './truth/truthDalhe';
import * as daresDalhe from './dare/dareDalhe';
import * as truthsCaliente from './truth/truthCaliente';
import * as daresCaliente from './dare/dareCaliente';
import * as truthsProibidano from './truth/truthProibidano';
import * as daresProibidano from './dare/dareProibidano';
import * as truthsGb from './truth/truthGb';
import * as daresGb from './dare/dareGb';

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
