/**
 * Auto-generated action file for "HHS Media Services" API.
 *
 * Generated at: 2019-05-07T14:42:19.195Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / hhs-gov-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'getMedia'
 * Endpoint Path: '/resources/media.json'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "max",
    "offset",
    "sort",
    "order",
    "mediaTypes",
    "name",
    "collectionId",
    "nameContains",
    "descriptionContains",
    "sourceUrl",
    "sourceUrlContains",
    "customThumbnailUrl",
    "customThumbnailUrlContains",
    "dateContentAuthored",
    "dateContentUpdated",
    "dateContentPublished",
    "dateContentReviewed",
    "dateSyndicationCaptured",
    "dateSyndicationUpdated",
    "contentAuthoredSinceDate",
    "contentAuthoredBeforeDate",
    "contentAuthoredInRange",
    "contentUpdatedSinceDate",
    "contentUpdatedBeforeDate",
    "contentUpdatedInRange",
    "contentPublishedSinceDate",
    "contentPublishedBeforeDate",
    "contentPublishedInRange",
    "contentReviewedSinceDate",
    "contentReviewedBeforeDate",
    "contentReviewedInRange",
    "syndicationCapturedSinceDate",
    "syndicationCapturedBeforeDate",
    "syndicationCapturedInRange",
    "syndicationUpdatedSinceDate",
    "syndicationUpdatedBeforeDate",
    "syndicationUpdatedInRange",
    "syndicationVisibleSinceDate",
    "syndicationVisibleBeforeDate",
    "syndicationVisibleInRange",
    "languageId",
    "languageName",
    "languageIsoCode",
    "hash",
    "hashContains",
    "sourceId",
    "sourceName",
    "sourceNameContains",
    "sourceAcronym",
    "sourceAcronymContains",
    "tagIds",
    "restrictToSet",
    "createdBy"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "max": "max",
    "offset": "offset",
    "sort": "sort",
    "order": "order",
    "mediaTypes": "mediaTypes",
    "name": "name",
    "collectionId": "collectionId",
    "nameContains": "nameContains",
    "descriptionContains": "descriptionContains",
    "sourceUrl": "sourceUrl",
    "sourceUrlContains": "sourceUrlContains",
    "customThumbnailUrl": "customThumbnailUrl",
    "customThumbnailUrlContains": "customThumbnailUrlContains",
    "dateContentAuthored": "dateContentAuthored",
    "dateContentUpdated": "dateContentUpdated",
    "dateContentPublished": "dateContentPublished",
    "dateContentReviewed": "dateContentReviewed",
    "dateSyndicationCaptured": "dateSyndicationCaptured",
    "dateSyndicationUpdated": "dateSyndicationUpdated",
    "contentAuthoredSinceDate": "contentAuthoredSinceDate",
    "contentAuthoredBeforeDate": "contentAuthoredBeforeDate",
    "contentAuthoredInRange": "contentAuthoredInRange",
    "contentUpdatedSinceDate": "contentUpdatedSinceDate",
    "contentUpdatedBeforeDate": "contentUpdatedBeforeDate",
    "contentUpdatedInRange": "contentUpdatedInRange",
    "contentPublishedSinceDate": "contentPublishedSinceDate",
    "contentPublishedBeforeDate": "contentPublishedBeforeDate",
    "contentPublishedInRange": "contentPublishedInRange",
    "contentReviewedSinceDate": "contentReviewedSinceDate",
    "contentReviewedBeforeDate": "contentReviewedBeforeDate",
    "contentReviewedInRange": "contentReviewedInRange",
    "syndicationCapturedSinceDate": "syndicationCapturedSinceDate",
    "syndicationCapturedBeforeDate": "syndicationCapturedBeforeDate",
    "syndicationCapturedInRange": "syndicationCapturedInRange",
    "syndicationUpdatedSinceDate": "syndicationUpdatedSinceDate",
    "syndicationUpdatedBeforeDate": "syndicationUpdatedBeforeDate",
    "syndicationUpdatedInRange": "syndicationUpdatedInRange",
    "syndicationVisibleSinceDate": "syndicationVisibleSinceDate",
    "syndicationVisibleBeforeDate": "syndicationVisibleBeforeDate",
    "syndicationVisibleInRange": "syndicationVisibleInRange",
    "languageId": "languageId",
    "languageName": "languageName",
    "languageIsoCode": "languageIsoCode",
    "hash": "hash",
    "hashContains": "hashContains",
    "sourceId": "sourceId",
    "sourceName": "sourceName",
    "sourceNameContains": "sourceNameContains",
    "sourceAcronym": "sourceAcronym",
    "sourceAcronymContains": "sourceAcronymContains",
    "tagIds": "tagIds",
    "restrictToSet": "restrictToSet",
    "createdBy": "createdBy"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'getMedia',
        pathName: '/resources/media.json',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}