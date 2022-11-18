class Main extends egret.DisplayObjectContainer {
  public constructor() {
    super();

    this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
  }

  private async onAddToStage() {
    await this.loadResource();
    this.run();
  }

  private async loadResource() {
    try {
      await RES.loadConfig("resource/default.res.json", "resource/");
    } catch (e) {
      console.error(e);
    }
  }

  private run() {
    this.addChild(new HelloDragonBones());
    // this.addChild(new AnimationBase());
    // this.addChild(new DragonBonesEvent());
    // this.addChild(new AnimationLayer());
    // this.addChild(new BoneOffset());
    // this.addChild(new InverseKinematics());
    // this.addChild(new BoundingBox());
    // this.addChild(new MultiTextureAltas());
    // this.addChild(new ReplaceSlotDisplay());
    // this.addChild(new ReplaceSkin());
    // this.addChild(new ReplaceAnimation());
    // this.addChild(new coreElement.Game());
    // this.addChild(new EyeTracking());
    // this.addChild(new PerformanceTest());
  }
}
