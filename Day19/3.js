function download(url) {
    return new Promise(function exec(resolve, reject) {
        console.log("Starting to download data from", url);
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDEF";
            resolve(content);
        }, 4000);
    });
}

function Writefile(data) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started writing file with", data);
        setTimeout(function write() {
            console.log("Completed writing the data in a file");
            const filename = "file.txt";
            resolve(filename);
        }, 5000);
    });
}

function Upload(url, file) {
    return new Promise(function exec(resolve, reject) {
        console.log("Started uploading", file, "on", url);
        setTimeout(function up() {
            console.log("Upload completed");
            const response = "SUCCESS";
            resolve(response);
        }, 2000);
    });
}

function doAfterReceiving(value) {
    const future = iter.next(value);
    if (!future.done) {
        future.value.then(doAfterReceiving);
    }
}

function* Steps() {
    const downloadData = yield download("www.xyz.com");
    console.log("Data downloaded is", downloadData);

    const fileName = yield Writefile(downloadData);
    console.log("File written is", fileName);

    const uploadResponse = yield Upload("www.upload.com", fileName);
    console.log("Upload response is", uploadResponse);
}

// Start the process
const iter = Steps();
const future = iter.next();
future.value.then(doAfterReceiving);
