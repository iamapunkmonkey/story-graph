export default class Rule {
  constructor(data, id) {
    this.id = id;
    this.isDirectional = data.isDirectional;

    this.cause = data.cause;
    this.consequent = data.consequent;

    this.consequentActor = data.consequentActor;
    this.mutations = data.mutations;

    this.locations = data.locations || [];
  }
  getSource() {
    return this.cause.type[0];
  }
  getTarget() {
    return this.cause.type[2];
  }
  getConsequentTarget() {
    return this.consequent.type[2];
  }
  getActionType() {
    return this.cause.type[1];
  }
}
