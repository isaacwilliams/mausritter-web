const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const onAfterRenderClient = async () => {
    // scroll to the #[anchor] if it exists
    const hash = window.location.hash;
    if (!hash) return;

    await wait(10); // Wait for the page to settle after the transition

    const locationAnchor = document.querySelector(hash);
    if (!locationAnchor) return;

    locationAnchor.scrollIntoView();
};
