var newsReaderServices = angular.module('newsReaderServices', ['ngResource']);

newsReaderServices.factory('NewsService', ['$resource', function($resource) {
    // Using The Guardian's Open Platform API (available since 2009)
    return $resource('http://content.guardianapis.com/:action', {
        action: 'search',
        'api-key': 'YOUR_API_KEY', // Replace with your Guardian API key
        format: 'json'
    }, {
        getHeadlines: {
            method: 'GET',
            params: {
                section: 'world',
                'show-fields': 'bodyText,thumbnail'
            },
            isArray: false,
            transformResponse: function(data) {
                var response = JSON.parse(data);
                return {
                    articles: response.response.results.map(function(item) {
                        return {
                            title: item.webTitle,
                            description: item.fields ? item.fields.bodyText.substring(0, 200) + '...' : '',
                            url: item.webUrl,
                            publishedAt: item.webPublicationDate,
                            source: { name: 'The Guardian' },
                            thumbnail: item.fields ? item.fields.thumbnail : ''
                        };
                    })
                };
            }
        },
        getByCategory: {
            method: 'GET',
            params: {
                section: '@category',
                'show-fields': 'bodyText,thumbnail'
            },
            isArray: false,
            transformResponse: function(data) {
                var response = JSON.parse(data);
                return {
                    articles: response.response.results.map(function(item) {
                        return {
                            title: item.webTitle,
                            description: item.fields ? item.fields.bodyText.substring(0, 200) + '...' : '',
                            url: item.webUrl,
                            publishedAt: item.webPublicationDate,
                            source: { name: 'The Guardian' },
                            thumbnail: item.fields ? item.fields.thumbnail : ''
                        };
                    })
                };
            }
        }
    });
}]); 