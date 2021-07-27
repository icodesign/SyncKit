(self.webpackChunkdocs_synckit=self.webpackChunkdocs_synckit||[]).push([[9347],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],l={id:"sharing",title:"Sharing"},s="Sharing",c={unversionedId:"sharing",id:"sharing",isDocsHomePage:!1,title:"Sharing",description:"Requirements",source:"@site/docs/sharing.md",sourceDirName:".",slug:"/sharing",permalink:"/sharing",version:"current",frontMatter:{id:"sharing",title:"Sharing"},sidebar:"docs",previous:{title:"Configuration",permalink:"/configuration"},next:{title:"Architecture",permalink:"/architecture"}},p=[{value:"Requirements",id:"requirements",children:[]},{value:"Configuring records for sharing",id:"configuring-records-for-sharing",children:[]},{value:"Updating existing records",id:"updating-existing-records",children:[]},{value:"Sharing objects",id:"sharing-objects",children:[]},{value:"Accepting shares",id:"accepting-shares",children:[]},{value:"Shares",id:"shares",children:[]}],d={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sharing"},"Sharing"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Your application must support sharing, make sure your Info.plist file has ",(0,o.kt)("inlineCode",{parentName:"p"},"CKSharingSupported = YES"),"."),(0,o.kt)("h2",{id:"configuring-records-for-sharing"},"Configuring records for sharing"),(0,o.kt)("p",null,"Your model classes can conform to ",(0,o.kt)("inlineCode",{parentName:"p"},"ParentKey")," and implement its ",(0,o.kt)("inlineCode",{parentName:"p"},"static func parentKey() -> String")," to return the name of the property pointing at the parent object. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'class Company: Object {\n    ...\n    let employees = LinkingObjects(fromType: Employee.self, property: "company")\n}\n\nclass Employee: Object, ParentKey {\n    @objc dynamic var company: Company?\n    let addresses = LinkingObjects(fromType: Address.self, property: "employee")\n    \n    static func parentKey() -> String {\n        return "company"\n    }\n}\n\nclass Address: Object, ParentKey {\n    @objc dynamic var employee: Employee?\n    \n    static func parentKey() -> String {\n        return "employee"\n    }\n}\n')),(0,o.kt)("p",null,"This way, when SyncKit synchronizes your objects it will set the ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," property correctly, so that when you share a ",(0,o.kt)("inlineCode",{parentName:"p"},"Company")," object with another user the share will include that company's employees and employee addresses."),(0,o.kt)("h2",{id:"updating-existing-records"},"Updating existing records"),(0,o.kt)("p",null,"If you specify the ",(0,o.kt)("inlineCode",{parentName:"p"},"parentKey")," as mentioned above SyncKit will configure correctly the record hierarchy for new records being uploaded, but you might want to update existing records before using sharing functions \u2013if you were using an older version of SyncKit and want to share an object that had been synchronized already, for example. It is possible to do so by doing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"\nsynchronizer.reuploadRecordsForChildrenOf(root: yourRootObject) { error in\n    if error == nil {\n        // All records for the root object and its children updated with correct `parent` values\n    }\n}\n")),(0,o.kt)("h2",{id:"sharing-objects"},"Sharing objects"),(0,o.kt)("p",null,"You can prepare a ",(0,o.kt)("inlineCode",{parentName:"p"},"CKShare")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// Create CKShare and upload records to CloudKit\nstrongSelf.synchronizer.share(object: object,\n                              publicPermission: .readOnly,\n                              participants: [],\n                              completion: { (share, error) in                            \n                            ...\n                        })\n")),(0,o.kt)("p",null,"This will create the share object and upload the object's record and share to CloudKit. Depending on your application this might be all you need to do, or you could pass this share object to a ",(0,o.kt)("inlineCode",{parentName:"p"},"UICloudSharingController")," to provide some UI for customization."),(0,o.kt)("p",null,"To stop sharing, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// Delete share on CloudKit and remove local data\nstrongSelf.synchronizer.removeShare(object: object,\n                                  completion: { (error) in                            \n                                        ...\n                                    })\n")),(0,o.kt)("p",null,"To update the local copy of a share, or remove it (in response to changes made by a ",(0,o.kt)("inlineCode",{parentName:"p"},"UICloudSharingController"),", for example) use these:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"func cloudSharingControllerDidSaveShare(_ csc: UICloudSharingController) {\n        \n    guard let share = csc.share else {\n        return\n    }\n    synchronizer.saveShare(share, for: self.editigObject)\n}\n    \nfunc cloudSharingControllerDidStopSharing(_ csc: UICloudSharingController) {\n    \n    synchronizer.deleteShare(for: self.editingObject)\n}\n")),(0,o.kt)("h2",{id:"accepting-shares"},"Accepting shares"),(0,o.kt)("p",null,"Once a share has been created and sent to a user your UIApplicationDelegate class must be able to accept that share:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, userDidAcceptCloudKitShareWith cloudKitShareMetadata: CKShareMetadata) {\n        \n        let container = CKContainer(identifier: cloudKitShareMetadata.containerIdentifier)\n        let acceptSharesOperation = CKAcceptSharesOperation(shareMetadatas: [cloudKitShareMetadata])\n        acceptSharesOperation.qualityOfService = .userInteractive\n        acceptSharesOperation.acceptSharesCompletionBlock = { error in\n            if let error = error {\n                DispatchQueue.main.async {\n                    let alertController = UIAlertController(title: "Error", message: "Could not accept CloudKit share: \\(error.localizedDescription)", preferredStyle: .alert)\n                    alertController.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))\n                }\n            } else {\n                // Ready to synchronize\n            }\n        }\n        container.add(acceptSharesOperation)\n    }\n')),(0,o.kt)("p",null,"At that point the share has been accepted and records can be downloaded from the container's shared database. You can use a synchronizer to do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'var sharedSynchronizer: CloudKitSynchronizer! = CloudKitSynchronizer.sharedSynchronizer(containerName: "your-container-name", configuration: self.realmConfiguration)\n\n...\n\nsharedSynchronizer.synchronize { error in \n    \n}\n')),(0,o.kt)("p",null,"When user A accepts a share from user B a new record zone is created in user A's shared database for user B's records. As a result, multiple record zones could be created in the shared database. Each time a ",(0,o.kt)("inlineCode",{parentName:"p"},"CloudKitSynchronizer")," encounters a new record zone it will ask its ",(0,o.kt)("inlineCode",{parentName:"p"},"CloudKitSynchronizerAdapterProvider")," for a ",(0,o.kt)("inlineCode",{parentName:"p"},"ModelAdapter")," to handle changes in that record zone. The default provider will create a new Core Data stack or Realm for the record zone, as well as a model adapter. Therefore, one option to access this shared data would be to access each data stack through the synchronizer's adapters (see ",(0,o.kt)("a",{parentName:"p",href:"/architecture"},"Architecture"),")"),(0,o.kt)("p",null,"To make this easier, you can configure a results controller that will surface data obtained from the shared database and will update the results when data gets synchronized. In the case of Core Data, there's ",(0,o.kt)("inlineCode",{parentName:"p"},"CoreDataMultiFetchedResultsController")," to provide an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"NSFetchedResultsController"),", and in the case of Realm there's ",(0,o.kt)("inlineCode",{parentName:"p"},"MultiRealmResultsController")," to provide an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"Results<T>")," (RealmSwift) or ",(0,o.kt)("inlineCode",{parentName:"p"},"RLMResults")," (Realm)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},'// Core Data\nlet fetchRequest = NSFetchRequest<NSFetchRequestResult>(entityName: "QSCompany")\nfetchRequest.sortDescriptors = [NSSortDescriptor(key: "name", ascending: true)]\nlet fetchedResultsController = synchronizer.multiFetchedResultsController(fetchRequest: fetchRequest)\nfetchedResultsController.delegate = self\n\n...\n\n// Delegate\nfunc multiFetchedResultsControllerDidChangeControllers(_ controller: CoreDataMultiFetchedResultsController) {\n    // reload data\n}\n    \nfunc controllerDidChangeContent(_ controller: NSFetchedResultsController<NSFetchRequestResult>) {\n    // reload data\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// Realm\nresultsController = synchronizer.multiRealmResultsController()\nresultsController.didChangeRealms = { [weak self] controller in\n    self?.tableView.reloadData()\n}\n\n")),(0,o.kt)("h2",{id:"shares"},"Shares"),(0,o.kt)("p",null,"For existing objects you can check if they have been shared by calling"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"@objc func share(for object: AnyObject) -> CKShare?\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CloudKitSynchronizer")," will check the model adapter that manages that object and return the share if it exists. You then can present it using a ",(0,o.kt)("inlineCode",{parentName:"p"},"UICloudSharingController"),", for example."))}u.isMDXComponent=!0}}]);