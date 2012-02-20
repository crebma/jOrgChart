describe('jOrgChart', function() {
	
	describe('default chart', function() {
		
		beforeEach(function() {
			$.jasmine.inject('<ul id="org" style="display:none">' +
								'<li>' +
								  'Food' +
								  '<ul>' +
								    '<li>Beer</li>' +
								    '<li>Vegetables' +
								      '<ul>' +
								        '<li>Pumpkin</li>' +
								        '<li><a href="http://tquila.com" target="_blank">Aubergine</a></li>' +
								      '</ul>' +
								    '</li>' +
								    '<li>Bread</li>' +
								    '<li>Chocolate' +
								      '<ul>' +
								        '<li>Topdeck</li>' +
								        '<li>Reese\'s Cups</li>' +
								      '</ul>' +
								    '</li>' +
								  '</ul>' +
								'</li>' +
								'</ul>');
			
			$("#org").jOrgChart();
		});

		it('should build the correct tables', function() {
			var expected = '<table cellpadding="0" cellspacing="0" border="0">' +
								'<tbody>' +
									'<tr class="node-cells">' +
										'<td class="node-cell" colspan="8">' +
											'<div class="node expanded" style="cursor: n-resize; ">Food</div>' +
										'</td>' +
									'</tr>' +
									'<tr>' +
										'<td colspan="8">' +
											'<div class="line down"></div>' +
										'</td>' +
									'</tr>' +
									'<tr>' +
										'<td class="line left">&nbsp;</td>' +
										'<td class="line right top">&nbsp;</td>' +
										'<td class="line left top">&nbsp;</td>' +
										'<td class="line right top">&nbsp;</td>' +
										'<td class="line left top">&nbsp;</td>' +
										'<td class="line right top">&nbsp;</td>' +
										'<td class="line left top">&nbsp;</td>' +
										'<td class="line right">&nbsp;</td>' +
									'</tr>' +
									'<tr>' +
										'<td class="node-container" colspan="2">' +
											'<table cellpadding="0" cellspacing="0" border="0">' +
												'<tbody>' +
													'<tr class="node-cells">' +
														'<td class="node-cell" colspan="2">' +
															'<div class="node">Beer</div>' +
														'</td>' +
													'</tr>' +
												'</tbody>' +
											'</table>' +
										'</td>' +
										'<td class="node-container" colspan="2">' +
											'<table cellpadding="0" cellspacing="0" border="0">' +
												'<tbody>' +
													'<tr class="node-cells">' +
														'<td class="node-cell" colspan="4">' +
															'<div class="node expanded" style="cursor: n-resize; ">Vegetables</div>' +
														'</td>' +
													'</tr>' +
													'<tr>' +
														'<td colspan="4"><div class="line down"></div></td>' +
													'</tr>' +
													'<tr>' +
														'<td class="line left">&nbsp;</td>' +
														'<td class="line right top">&nbsp;</td>' +
														'<td class="line left top">&nbsp;</td>' +
														'<td class="line right">&nbsp;</td>' +
													'</tr>' +
													'<tr>' +
														'<td class="node-container" colspan="2">' +
															'<table cellpadding="0" cellspacing="0" border="0">' +
																'<tbody>' +
																	'<tr class="node-cells">' +
																		'<td class="node-cell" colspan="2">' +
																			'<div class="node">Pumpkin</div>' +
																		'</td>' +
																	'</tr>' +
																'</tbody>' +
															'</table>' +
														'</td>' +
														'<td class="node-container" colspan="2">' +
															'<table cellpadding="0" cellspacing="0" border="0">' +
																'<tbody>' +
																	'<tr class="node-cells">' +
																		'<td class="node-cell" colspan="2">' +
																			'<div class="node"><a href="http://tquila.com" target="_blank">Aubergine</a></div>' +
																		'</td>' +
																	'</tr>' +
																'</tbody>' +
															'</table>' +
														'</td>' +
													'</tr>' +
												'</tbody>' +
											'</table>' +
										'</td>' +
										'<td class="node-container" colspan="2">' +
											'<table cellpadding="0" cellspacing="0" border="0">' +
												'<tbody>' +
													'<tr class="node-cells">' +
														'<td class="node-cell" colspan="2">' +
															'<div class="node">Bread</div>' +
														'</td>' +
													'</tr>' +
												'</tbody>' +
											'</table>' +
										'</td>' +
										'<td class="node-container" colspan="2">' +
											'<table cellpadding="0" cellspacing="0" border="0">' +
												'<tbody>' +
													'<tr class="node-cells">' +
														'<td class="node-cell" colspan="4">' +
															'<div class="node expanded" style="cursor: n-resize; ">Chocolate</div>' +
														'</td>' +
													'</tr>' +
													'<tr>' +
														'<td colspan="4"><div class="line down"></div></td>' +
													'</tr>' +
													'<tr>' +
														'<td class="line left">&nbsp;</td>' +
														'<td class="line right top">&nbsp;</td>' +
														'<td class="line left top">&nbsp;</td>' +
														'<td class="line right">&nbsp;</td>' +
													'</tr>' +
													'<tr>' +
														'<td class="node-container" colspan="2">' +
															'<table cellpadding="0" cellspacing="0" border="0">' +
																'<tbody>' +
																	'<tr class="node-cells">' +
																		'<td class="node-cell" colspan="2">' +
																			'<div class="node">Topdeck</div>' +
																		'</td>' +
																	'</tr>' +
																'</tbody>' +
															'</table>' +
														'</td>' +
														'<td class="node-container" colspan="2">' +
															'<table cellpadding="0" cellspacing="0" border="0">' +
																'<tbody>' +
																	'<tr class="node-cells">' +
																		'<td class="node-cell" colspan="2">' +
																			'<div class="node">Reese\'s Cups</div>' +
																		'</td>' +
																	'</tr>' +
																'</tbody>' +
															'</table>' +
														'</td>' +
													'</tr>' +
												'</tbody>' +
											'</table>' +
										'</td>' +
									'</tr>' +
								'</tbody>' +
							'</table>';

			expect($('.jOrgChart')).toHaveHtml(expected);
		});

	});

});