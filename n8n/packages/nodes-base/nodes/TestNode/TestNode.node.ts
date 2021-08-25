// @ts-ignore
import { get } from 'request';

import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

export class TestNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'TestNode',
		name: 'TestNode',
		icon: 'file:lieferando.png',
		group: ['transform'],
		version: 1,
		description: '',
		defaults: {
			name: 'TestNode',
			color: '#1A82e2',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'Bestellung',
						value: 'contact',
					},
				],
				default: 'contact',
				required: true,
				description: 'Resource to consume',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				displayOptions: {
					show: {
						resource: [
							'contact',
						],
					},
				},
				options: [
					{
						name: 'Erstellen',
						value: 'create',
					},
				],
				default: 'create',
				description: 'The operation to perform.',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		let result = {};

		await new Promise(resolve => {

			get('http://localhost:3000/', function (error: any, response: any, body: any) {
				console.error('error:', error);
				console.log('statusCode:', response && response.statusCode);
				console.log('body:', body);

				result = {
					error,
					response,
					body
				};

				resolve();
			});
		})

		return [this.helpers.returnJsonArray(result as IDataObject)];
	}
}
