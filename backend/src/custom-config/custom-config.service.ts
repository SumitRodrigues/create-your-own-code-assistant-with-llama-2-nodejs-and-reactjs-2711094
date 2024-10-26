import { cosmiconfigSync } from 'cosmiconfig';
import { resourceLimits } from 'worker_threads';

export default (options: Record<string, any>) => {
  console.log('loading config');
  const explorer = cosmiconfigSync('srodz');
  console.log('explorer setup', explorer);
  const searchPaths = options?.searchPaths || [process.cwd()];
  console.log('searchPaths', ...searchPaths);
  try {
    const result = explorer.search();
    console.log('results', result);
    if(result) {
      return result.config;
    } else {
      return {
        url: 'http://localhost:11434',
        model: 'llama2',
        requestOptions: {
          useMMap: true, //use_MMap: 1
          numThread: 6, // num_thread: 6
          numGpu: 1, //num_gpu: 1
        },
        database: {
          tableName: 'documents',
          columnName: 'match_documents',
        },
        extensions: ['.ts', '.js', '.json', '.jsonc', '.md'],
      };
    }
  } catch(e) {
    console.log(e);
  }
};
