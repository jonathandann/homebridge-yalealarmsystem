/*!
    MIT License

    https://github.com/jonathandann/homebridge-yalesyncalarm
    Copyright (c) 2019 Jonathan Dann

		Forked from https://github.com/jonathan-fielding/yalealarmsystem
    Copyright 2019 Jonathan Fielding, Jack Mellor & Adam Green

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

import {
	Decoder,
	object,
	string,
	number,
	oneOf,
	succeed,
} from 'type-safe-json-decoder'

export interface YaleSyncPlatformConfig {
	name: string
	username: string
	password: string
	refreshInterval: number // The number in seconds, values < 1 will disable refresh
}

export const platformConfigDecoder: Decoder<YaleSyncPlatformConfig> = object(
	['name', string()],
	['username', string()],
	['password', string()],
	['refreshInterval', number()],
	(name, username, password, refreshInterval) => ({
		name,
		username,
		password,
		refreshInterval,
	})
)
