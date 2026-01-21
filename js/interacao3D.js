export function createScene(engine, canvas, BABYLON, Assets) {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    const camera = new BABYLON.ArcRotateCamera(
        "camera",
        0,
        Math.PI / 3,
        5,
        BABYLON.Vector3.Zero(),
        scene
    );

    camera.attachControl(canvas, true);


    // Optional limits
    camera.lowerBetaLimit = 0.2;
    camera.upperBetaLimit = Math.PI / 2.1;
    camera.radius = 5;
    camera.lowerRadiusLimit = 2;
    camera.upperRadiusLimit = 12;
    camera.minZ = 0.05;
    camera.wheelDeltaPercentage = 0.01;


    const light = new BABYLON.HemisphericLight(
        "light",
        new BABYLON.Vector3(0, 1, 0),
        scene
    );
    light.intensity = 1.5;

    camera.alpha = BABYLON.Tools.ToRadians(0);

    BABYLON.SceneLoader.ImportMeshAsync("", "../3D/", "book.glb", scene)
        .then(({ meshes }) => {

            const glbRoot = meshes[0];

            // Create a clean parent
            const bookRoot = new BABYLON.TransformNode("bookRoot", scene);
            glbRoot.parent = bookRoot;

            // Reset GLB rotations
            glbRoot.rotationQuaternion = null;
            glbRoot.rotation.set(0, 0, 0);

            // Lay book flat
            bookRoot.rotation.x = -Math.PI / 2;
            bookRoot.rotation.y = Math.PI;

            bookRoot.scaling.set(0.05, 0.05, 0.05);
            bookRoot.position.y = -0.3;

            // 🔴 THIS IS THE IMPORTANT PART

            // Apply YOUR exact values AFTER target is set
            camera.alpha = 4.722511890046256;
            camera.beta = 1.4959217018843396;
            camera.radius = 5;
        });



    return scene;
}
