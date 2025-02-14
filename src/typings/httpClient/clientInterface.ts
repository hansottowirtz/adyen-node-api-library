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
import Config from "../../config";
import { RequestOptions } from "../requestOptions";
import { AgentOptions } from "https";
import HttpClientException from "../../httpClient/httpClientException";
import ApiException from "../../services/exception/apiException";

interface ClientInterface {
    request(
        endpoint: string, json: string, config: Config, isApiKeyRequired: boolean, requestOptions?: RequestOptions,
    ): Promise<string | HttpClientException | ApiException>;
    post(endpoint: string, postParameters: [string, string][], config: Config): Promise<HttpClientException | string>;
    proxy?: AgentOptions;
}

export default ClientInterface;
