/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import Config from "../config";
import ClientInterface from "../typings/httpClient/clientInterface";
import Service from "../service";
import { RequestOptions } from "../typings/requestOptions";
import HttpClientException from "../httpClient/httpClientException";
import ApiException from "./exception/apiException";

abstract class Resource {
    protected endpoint: string;
    private service: Service;

    protected constructor(service: Service, endpoint: string) {
        this.service = service;
        this.endpoint = endpoint;
    }

    public request(json: string, requestOptions?: RequestOptions): Promise<string | HttpClientException | ApiException> {
        const clientInterface: ClientInterface = this.service.client.httpClient;
        const config: Config = this.service.client.config;

        return clientInterface.request(
            this.endpoint,
            json, config,
            this.service.apiKeyRequired,
            requestOptions,
        );
    }
}

export default Resource;
