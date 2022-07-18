import React from "react";
import Page from "../../components/Page";
import "uig-webcomponents/lib/legacy/rich-data";
import "uig-webcomponents/lib/components/search-filter";
import "uig-webcomponents/lib/components/search-results";
import "uig-webcomponents/lib/components/select";
import "uig-webcomponents/lib/components/form";
import "uig-webcomponents/lib/components/input-field";
import SectionWrap from "../../components/SectionWrap";

const RichDataView = () => {
          customElements.whenDefined('vl-rich-data').then(() => {
            const element = document.querySelector('#rich-data');
            const content = element.querySelector('[slot="content"]');
            const sorter = element.querySelector('[slot="sorter"]');
            const pager = element.querySelector('vl-pager');
            const data = {
              'data': [{
                'id': 0,
                'name': 'Project #1',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Sander',
                  'lastName': 'Kleykens'
                }],
              }, {
                'id': 1,
                'name': 'Project #2',
                'manager': {
                  'firstName': 'Tom',
                  'lastName': 'Coemans'
                },
                'medewerkers': [{
                  'firstName': 'Guy',
                  'lastName': 'Wauters'
                }],
              }, {
                'id': 2,
                'name': 'Project #3',
                'manager': {
                  'firstName': 'Tom',
                  'lastName': 'Coemans'
                },
                'medewerkers': [{
                  'firstName': 'Guy',
                  'lastName': 'Wauters'
                }],
              }, {
                'id': 3,
                'name': 'Project #4',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 4,
                'name': 'Project #5',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 5,
                'name': 'Project #6',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 6,
                'name': 'Project #7',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 7,
                'name': 'Project #8',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 8,
                'name': 'Project #9',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 9,
                'name': 'Project #10',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 10,
                'name': 'Project #11',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 11,
                'name': 'Project #12',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 12,
                'name': 'Project #13',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 13,
                'name': 'Project #14',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 14,
                'name': 'Project #15',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 15,
                'name': 'Project #16',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 16,
                'name': 'Project #17',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 17,
                'name': 'Project #18',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 18,
                'name': 'Project #19',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 19,
                'name': 'Project #20',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 20,
                'name': 'Project #21',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 21,
                'name': 'Project #22',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 22,
                'name': 'Project #23',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 23,
                'name': 'Project #24',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }, {
                'id': 24,
                'name': 'Project #25',
                'manager': {
                  'firstName': 'Pascal',
                  'lastName': 'Riquier'
                },
                'medewerkers': [{
                  'firstName': 'Pieter',
                  'lastName': 'Beckers'
                }],
              }],
            };
            let newData = undefined;
            const setContentData = (data, from, to) => {
              if (JSON.stringify(newData) != JSON.stringify(data)) {
                newData = data;
                content.innerHTML = ``;
                data.slice(from, to).forEach((project) => {
                  const now = new Date().toLocaleString();
                  const manager = project.manager;
                  const medewerker = project.medewerkers[0];
                  const html = `
                            <li is="vl-search-result">
                              <a href="#">${project.name}</a>
                              <time>Gestart op ${now}</time>
                              <dl>
                                <dt>ID</dt>
                                <dd>${project.id}</dd>
                                <dt>Naam manager</dt>
                                <dd>${manager.lastName}</dd>
                                <dt>Eerste medewerker</dt>
                                <dd>${medewerker.lastName}</dd>
                                <dt>Project o.l.v. <b>manager</b></dt>
                                <dd>${project.name} o.l.v. <b>${manager.firstName} ${manager.lastName}</b></dd>
                              </dl>
                            </li>
                          `;
                  content.insertAdjacentHTML('beforeend', html);
                });
              }
            };
            const filter = (data, pathToKey, value) => {
              if (value === '') {
                return data;
              }
              return data.filter((element) => {
                const valueByPath = findValueByPath(element, pathToKey);
                return valueByPath.includes(value);
              });
            };
            const findValueByPath = (element, pathToKey) => {
              const keys = pathToKey.split('.');
              let current = element;
              for (let i = 0; i < keys.length; i++) {
                if (current[keys[i]] !== undefined) {
                  current = current[keys[i]];
                } else {
                  return undefined;
                }
              }
              return current.toString();
            };
            element.addEventListener('change', (event) => {
              let newData = data.data;
              let totalItems = data.data.length;
              let filterEntries = undefined;
              if (event.detail.formData) {
                filterEntries = [];
                for (const entry of event.detail.formData.entries()) {
                  newData = filter(newData, entry[0], entry[1]);
                  totalItems = newData.length;
                  filterEntries.push({
                    name: entry[0],
                    value: entry[1],
                  });
                }
              }
              if (event.detail.paging) {
                const from = (event.detail.paging.currentPage - 1) * 10;
                setContentData(newData, from, from + 10);
              }
              element.data = {
                paging: {
                  currentPage: event.detail.paging.currentPage,
                  totalItems: totalItems,
                },
                filter: filterEntries,
              };
            });
            sorter.addEventListener('change', (event) => {
              const data = [...newData];
              event.stopPropagation();
              data.sort((firstElement, secondElement) => {
                const keys = event.target.value.split('.');
                const firstValue = (keys.reduce((value, key) => value[key], firstElement)).toString();
                const secondValue = (keys.reduce((value, key) => value[key], secondElement)).toString();
                return firstValue.localeCompare(secondValue);
              });
              element.data = {
                paging: {
                  currentPage: 1,
                  totalItems: data.length,
                },
              };
              setContentData(data, 0, 10);
            });
            setContentData(data.data, 0, pager.getAttribute('items-per-page'));
            element.data = {
              paging: {
                currentPage: 1,
                totalItems: 25,
              },
            };
          });
  return (
    <Page title="Rich Data">
      <SectionWrap>
        <div is="vl-column">
          <h2 is="vl-h2">Example 1</h2>
        </div>
        <div is="vl-column">
        <vl-rich-data id="rich-data" data-vl-filter-closable="">
          <span slot="no-content">Geen resultaten</span>
          <ul is="vl-search-results" slot="content"></ul>
          <select is="vl-select" slot="sorter" aria-label="Sorteer">
            <option value="id">ID</option>
            <option value="manager.lastName">Naam manager</option>
          </select>
          <div is="vl-search-filter" data-vl-alt="" slot="filter">
            <form is="vl-form" id="rich-data-table-filter-form">
              <section>
                <h2>Doorzoek projecten</h2>
                <div>
                  <label is="vl-form-label" for="filterOpId">Project id</label>
                  <input is="vl-input-field" id="filterOpId" type="text" name="id" value="" data-vl-block="" />
                </div>
              </section>
              <section>
                <h2>Project details</h2>
                <div>
                  <label is="vl-form-label" for="filterOpNaamProject">Project naam</label>
                  <input is="vl-input-field" id="filterOpNaamProject" type="text" name="name" value="" data-vl-block="" />
                </div>
                <div>
                  <label is="vl-form-label" for="filterOpNaamManager">Manager familienaam</label>
                  <input is="vl-input-field" id="filterOpNaamManager" type="text" name="manager.lastName" value="" data-vl-block="" />
                </div>
              </section>
              <div>
                <button is="vl-button" type="submit">Zoeken</button>
              </div>
            </form>
            <div>
              <button is="vl-button-link" type="reset" form="rich-data-table-filter-form">Zoekopdracht verwijderen</button>
            </div>
          </div>
          <vl-pager id="rich-data-table-filter-sorting-paging-pager" slot="pager" data-vl-total-items="25" data-vl-items-per-page="10" data-vl-current-page="1" adata-vl-lign-center=""></vl-pager>
        </vl-rich-data>
        </div>
      </SectionWrap>
    </Page>
  );
};

export default RichDataView;
