if (process.env.TRAVIS_PULL_REQUEST_BRANCH && process.env.TRAVIS_PULL_REQUEST_BRANCH.startsWith("patch")) throw new Error("Changes made from the online GitHub editor (i.e. branches starting with 'patch') are not permitted. Please test changes locally before opening a PR.");
