# ![LOGO](logo.png) HHS Media Services **flow**ground Connector

## Description

A generated **flow**ground connector for the HHS Media Services API (version 2).

Generated from: https://api.apis.guru/v2/specs/hhs.gov/2/swagger.json<br/>
Generated at: 2019-05-07T17:42:19+03:00

## API Description


<div class="swagger-ui-wrap extraFooter"><h3>Common Features / Behaviors</h3>
    <div class="features">
        <ul>
            <li><strong>* "sort" param:</strong> supports multi column sorting through the use of commas as delimiters, and a hyphen to denote descending order.
                <br/>
                <strong><span>Examples:</span></strong>
                <ul>
                    <li><span class="example">name</span><span class="description">sort results by name ascending</span></li>
                    <li><span class="example">-name</span><span class="description">sort results by name descending</span></li>
                    <li><span class="example">-name,id</span><span class="description">sort results by name descending and then by id ascending</span></li>
                    <li><span class="example">id,-dateContentAuthored</span><span class="description">sort results by id ascending and then date descending</span></li>
                </ul>
            </li>
            <li><strong>Date formats:</strong> Date input format is expected to be based on <a href="http://www.ietf.org/rfc/rfc3339.txt">RFC 3339</a>. <br/>
                <span><strong>Example:</strong></span>
                <ul><li>2013-11-18T18:43:01Z</li></ul>
            </li>
        </ul>
    </div>
</div>


## Authorization

This API does not require authorization.

## Actions

### Get Resources by search query

> Returns the list of Resources matching the search query 'q'.<p>The search query 'q' is a Lucene query.<br>The syntax for a Lucene query can be found <a href="http://lucene.apache.org/core/2_9_4/queryparsersyntax.html">here</a>.

*Tags:* `resources`

#### Input Parameters
* `q` - _required_ - The search query supplied by the user

### Get Campaigns

> Returns the list of Campaigns.

*Tags:* `campaigns`

#### Input Parameters
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - The offset of the records set to return for pagination
* `sort` - _optional_ - * Set of fields to sort the records by.

### Get Campaign by ID

> Returns the Campaign identified by the 'id'.

*Tags:* `campaigns`

#### Input Parameters
* `id` - _required_ - The id of the record to look up

### Get MediaItems by Campaign ID

> Returns the list of MediaItems for the Campaign identified by the 'id'.

*Tags:* `campaigns`

#### Input Parameters
* `id` - _required_ - The id of the campaign to find media items for
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - The offset of the records set to return for pagination
* `sort` - _optional_ - The name of the property to which sorting will be applied

### Get MediaItems for Campaign

> Renders the list of MediaItems associated with the Campaign identified by the 'id'.

*Tags:* `campaigns`

#### Input Parameters
* `id` - _required_ - The id of the record to look up
* `displayMethod` - _optional_ - Method used to render an html request. Accepts one: [mv, list, feed]

### Get Languages

> Returns the list Languages.

*Tags:* `languages`

#### Input Parameters
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - The offset of the records set to return for pagination
* `sort` - _optional_ - * Set of fields to sort the records by.

### Get Language by ID

> Returns the Language identified by the 'id'.

*Tags:* `languages`

#### Input Parameters
* `id` - _required_ - The id of the language to look up

### Get MediaItems

> Returns the list of MediaItems matching the specified query parameters.

*Tags:* `media`

#### Input Parameters
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - The offset of the records set to return for pagination.
* `sort` - _optional_ - * Set of fields to sort the records by.
* `order` - _optional_ - * The ascending or descending order.
* `mediaTypes` - _optional_ - Find all media items belonging to the specified media type[s].
* `name` - _optional_ - Find all media items containing the provided name, case insensitive.
* `collectionId` - _optional_ - Restrict filtering to media items in a specific collection.
* `nameContains` - _optional_ - Find all media items containing the partial name, case insensitive.
* `descriptionContains` - _optional_ - Find all media items containing the provided partial description, case insensitive.
* `sourceUrl` - _optional_ - Find all media items which have the provided sourceUrl, case insensitive.
* `sourceUrlContains` - _optional_ - Find all media items which contain the provided partial sourceUrl, case insensitive.
* `customThumbnailUrl` - _optional_ - Find all media items which have the provided customThumbnailUrl, case insensitive.
* `customThumbnailUrlContains` - _optional_ - Find all media items which contain the provided partial customThumbnailUrl, case insensitive.
* `dateContentAuthored` - _optional_ - Find all media items authored on the provided day (RFC 3339, time ignored).
* `dateContentUpdated` - _optional_ - Find all media items updated on the provided day (RFC 3339, time ignored).
* `dateContentPublished` - _optional_ - Find all media items published on the provided day (RFC 3339, time ignored).
* `dateContentReviewed` - _optional_ - Find all media items reviewed on the provided day (RFC 3339, time ignored).
* `dateSyndicationCaptured` - _optional_ - Find all media items authored on the provided day (RFC 3339, time ignored).
* `dateSyndicationUpdated` - _optional_ - Find all media items updated on the provided day, (RFC 3339, time ignored).
* `contentAuthoredSinceDate` - _optional_ - Find all media items authored since the provided day (RFC 3339, time ignored).
* `contentAuthoredBeforeDate` - _optional_ - Find all media items authored before the provided day (RFC 3339, time ignored).
* `contentAuthoredInRange` - _optional_ - Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).
* `contentUpdatedSinceDate` - _optional_ - Find all media items updated since the provided day (RFC 3339, time ignored).
* `contentUpdatedBeforeDate` - _optional_ - Find all media items updated before the provided day (RFC 3339, time ignored).
* `contentUpdatedInRange` - _optional_ - Find all media items updated between the provided start and end days (RFC 3339, comma separated, time ignored).
* `contentPublishedSinceDate` - _optional_ - Find all media items published since the provided day (RFC 3339, time ignored).
* `contentPublishedBeforeDate` - _optional_ - Find all media items published before the provided day (RFC 3339, time ignored).
* `contentPublishedInRange` - _optional_ - Find all media items published between the provided start and end days (RFC 3339, comma separated, time ignored).
* `contentReviewedSinceDate` - _optional_ - Find all media items reviewed since the provided day (RFC 3339, time ignored).
* `contentReviewedBeforeDate` - _optional_ - Find all media items reviewed before the provided day (RFC 3339, time ignored).
* `contentReviewedInRange` - _optional_ - Find all media items reviewed between the provided start and end days (RFC 3339, comma separated, time ignored).
* `syndicationCapturedSinceDate` - _optional_ - Find all media items authored since the provided day (RFC 3339, time ignored).
* `syndicationCapturedBeforeDate` - _optional_ - Find all media items authored before the provided day (RFC 3339, time ignored).
* `syndicationCapturedInRange` - _optional_ - Find all media items authored between the provided start and end days (RFC 3339, comma separated, time ignored).
* `syndicationUpdatedSinceDate` - _optional_ - Find all media items updated since the provided day, (RFC 3339, time ignored).
* `syndicationUpdatedBeforeDate` - _optional_ - Find all media items updated before the provided day, (RFC 3339, time ignored).
* `syndicationUpdatedInRange` - _optional_ - Find all media items updated between the provided start and end days, (RFC 3339, comma separated, time ignored).
* `syndicationVisibleSinceDate` - _optional_ - Find all media items visible since the provided day, (RFC 3339, time ignored).
* `syndicationVisibleBeforeDate` - _optional_ - Find all media items visible before the provided day, (RFC 3339, time ignored).
* `syndicationVisibleInRange` - _optional_ - Find all media items visible between the provided start and end days, (RFC 3339, comma separated, time ignored).
* `languageId` - _optional_ - Find all media items written in the language specified by Id.
* `languageName` - _optional_ - Find all media items written in the language specified by name, case insensitive.
* `languageIsoCode` - _optional_ - Find all media items written in the language specified by 639-2 isoCode , case insensitive.
* `hash` - _optional_ - Find all media items which match the provided hash, case insensitive.
* `hashContains` - _optional_ - Find all media items which match the provided partial hash, case insensitive.
* `sourceId` - _optional_ - Find all media items that belong to the source specified by Id.
* `sourceName` - _optional_ - Find all media items that belong to the source specified by name, case insensitive.
* `sourceNameContains` - _optional_ - Find all media items that belong to the source specified by partial name, case insensitive.
* `sourceAcronym` - _optional_ - Find all media items that belong to the source specified by acronym, case insensitive.
* `sourceAcronymContains` - _optional_ - Find all media items that belong to the source specified by partial acronym, case insensitive.
* `tagIds` - _optional_ - Find only media items tagged with the specified tag Ids.
* `restrictToSet` - _optional_ - Find only media from within the supplied list of Ids.
* `createdBy` - _optional_ - Find all media items containing the createdBy value.

### Get the list of featured content in the syndication system

*Tags:* `media`

#### Input Parameters
* `sort` - _optional_ - * Set of fields to sort the records by.
* `max` - _optional_ - The maximum number of records to return.
* `offset` - _optional_ - How many records to offset the query by.

### Get MediaItems by popularity

> Returns the list of MediaItems with the highest ratings.

*Tags:* `media`

#### Input Parameters
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - The offset of the records set to return for pagination.

### Get MediaItems by search query

> Returns the list of MediaItems matching the search query 'q'.<p>The search query 'q' is a Lucene query.<br>The syntax for a Lucene query can be found <a href="http://lucene.apache.org/core/2_9_4/queryparsersyntax.html">here</a>

*Tags:* `media`

#### Input Parameters
* `q` - _required_ - The search query supplied by the user
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - The offset of the records set to return for pagination.

### Get MediaItem by ID

> Returns the MediaItem identified by the 'id'.

*Tags:* `media`

#### Input Parameters
* `id` - _required_ - The id of the record to look up

### Get content for MediaItem

> Returns the raw content (html, image, etc...) for the MediaItem identified by the 'id'.

*Tags:* `media`

#### Input Parameters
* `id` - _required_ - The id of the media to show content for.
* `calledByBuild` - _optional_ - The method that called this method

### Get embed code for MediaItem

> Returns the javascript or iframe embed code for the MediaItem identified by 'id'.

*Tags:* `media`

#### Input Parameters
* `id` - _required_ - The id of the media to get embed code for.
* `flavor` - _optional_ - Currently supports 'iframe', defaults to 'javascript'.
* `width` - _optional_ - The width of the generated iframe.
* `height` - _optional_ - The height of the generated iframe.
* `iframeName` - _optional_ - The name of the iframe element
* `excludeJquery` - _optional_ - Should a reference to the JQuery Library be omitted?
* `excludeDiv` - _optional_ - Should the div to insert content into be omitted?
* `divId` - _optional_ - Should the div to insert content into have a specific name?
* `displayMethod` - _optional_ - Method used to render an html request. Accepts one: [mv, list, feed]

### Get JPG preview for MediaItem

> Returns the JPG preview, where applicable, for the MediaItem identified by the 'id'.

*Tags:* `media`

#### Input Parameters
* `id` - _required_ - The id of the media to get a preview for.

### Get Ratings for MediaItem

> Get the Ratings (number of 'likes') for the MediaItem identified by the 'id'.

*Tags:* `media`

#### Input Parameters
* `id` - _required_ - The ID of the media item to 'like'.

### Get related MediaItems by ID

> Returns the list of MediaItems related to the MediaItem identified by the 'id'.

*Tags:* `media`

#### Input Parameters
* `id` - _required_ - The id of the media item to get related media for
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - The offset of the records set to return for pagination.
* `sort` - _optional_ - Which field to sort the records by.

### Get syndicated content for MediaItem

> Returns the syndicated content for a given MediaItem in the specified 'format' (HTML or JSON).

*Tags:* `media`

#### Input Parameters
* `id` - _required_ - The id of the media to show embed code for.
* `cssClass` - _optional_ - The css class to target for extraction.
* `stripStyles` - _optional_ - Remove in-line styles from content.
* `stripScripts` - _optional_ - Remove script tags from content.
* `stripImages` - _optional_ - Remove image tags from content.
* `stripBreaks` - _optional_ - Remove break tags from content.
* `stripClasses` - _optional_ - Remove class attributes from content (except 'syndicate').
* `font-size` - _optional_ - Set font size (in points) of p, div, and span tags.
* `imageFloat` - _optional_ - Accepts valid CSS float options, such as 'left' or 'right'. Will inject a style into the content before rendering.
* `imageMargin` - _optional_ - Accepts 4 CSV values representing pixel sizes of margin similar to CSS. Default format is 'north,east,south,west' - for example '0,10,10,0' would put a 10 pixel margin on the right and bottom sides of an image. Will inject a style into the content before rendering.
* `autoplay` - _optional_ - If content is a video, the embeded video will auto play when loaded.
* `rel` - _optional_ - If content is a video, related items will be shown at the end of playback.

### Get JPG thumbnail for MediaItem

> Returns the JPG thumbnail, where applicable, for the MediaItem identified by the 'id'.

*Tags:* `media`

#### Input Parameters
* `id` - _required_ - The id of the media to get a thumbnail for.

### Get Youtube metadata for MediaItem

> Returns the Youtube metadata, where applicable, for the MediaItem identified by the 'id'.

*Tags:* `media`

#### Input Parameters
* `id` - _required_ - The id of the video to show meta data for.

### Get MediaTypes

> Returns the list of available MediaTypes.

*Tags:* `mediaTypes`

### Get Sources

> Returns the list of Sources.

*Tags:* `sources`

#### Input Parameters
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - The offset of the records set to return for pagination
* `sort` - _optional_ - * Set of fields to sort the records by.

### Get Source by ID

> Returns the Source identified by the 'id'.

*Tags:* `sources`

#### Input Parameters
* `id` - _required_ - The id of the source to look up

### Get MediaItems for Source

> Renders the list of MediaItems associated with the Source identified by the 'id'.

*Tags:* `sources`

#### Input Parameters
* `id` - _required_ - The id of the record to look up
* `displayMethod` - _optional_ - Method used to render an html request. Accepts one: [mv, list, feed]

### Get Tags

> Returns the list of Tags matching the specified query parameters in the specified 'format'.

*Tags:* `tags`

#### Input Parameters
* `sort` - _optional_ - The name of the property to which sorting will be applied
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - Return records starting at the offset index.
* `name` - _optional_ - Return tags[s] matching the supplied name
* `nameContains` - _optional_ - Return tags which contain the supplied partial name.
* `mediaId` - _optional_ - Return tags associated with the supplied media id.
* `typeId` - _optional_ - Return tags belonging to the supplied tag type id.
* `typeName` - _optional_ - Return tags belonging to the supplied tag type name.

### Get TagLanguages

> Returns the list of TagLanguages

*Tags:* `tags`

### Get TagTypes

> Returns the list of TagTypes

*Tags:* `tags`

### Get Tag by ID

> Returns the Tag identified by the 'id' in the specified 'format'.

*Tags:* `tags`

#### Input Parameters
* `id` - _required_ - The id of the record to look up

### Get MediaItems for Tag

> Returns the list of MediaItems associated with the Tag identified by the 'id'.

*Tags:* `tags`

#### Input Parameters
* `id` - _required_ - The id of the record to look up
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - The offset of the records set to return for pagination
* `sort` - _optional_ - The name of the property to which sorting will be applied

### Get related Tags by ID

> Returns the list of Tags related to the Tag identified by the 'id' in the specified format.

*Tags:* `tags`

#### Input Parameters
* `id` - _required_ - The id of the tag to look up
* `max` - _optional_ - The maximum number of records to return
* `offset` - _optional_ - The offset of the records set to return for pagination
* `sort` - _optional_ - The name of the property to which sorting will be applied

### Get MediaItems for Tag

> Renders the list of MediaItems associated with the Tag identified by the 'id'.

*Tags:* `tags`

#### Input Parameters
* `id` - _required_ - The id of the record to look up
* `displayMethod` - _optional_ - Method used to render an html request. Accepts one: [mv, list, feed]

### Get UserMediaList by ID

> Get a specific user media list by 'id'.

*Tags:* `userMediaLists`

#### Input Parameters
* `id` - _required_ - The id of the record to look up
* `displayMethod` - _optional_ - Method used to render an html request. Accepts one: [mv, list, feed]

## License

**flow**ground :- Telekom iPaaS / hhs-gov-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
